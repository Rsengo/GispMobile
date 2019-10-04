import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Map.styles';
import MapView, {
  MAP_TYPES,
  ProviderPropType,
  WMSTile,
} from 'react-native-maps';
import { layersTreeService, layerService } from '../../../services';
import { actions as rootActions } from '../../root';
import { View, Text } from 'react-native';
import { getWmsLayerUrl } from '../services/wmsService'
import Axios from 'axios';

const Map = ({ activeLayers, mapType }) => {
  return (
    <MapView 
      style={styles.map}
      mapType={mapType}
      provider={null}
    >
      {activeLayers.map(layerInfo => {
        return (
          <WMSTile 
            urlTemplate={getWmsLayerUrl(layerInfo)} 
            tileSize={256}
            zIndex={layerInfo.layerOrder}
            opacity={1}
          />
        )
      })}
    </MapView>
  );
};

const mapStateToProps = ({ root, map }) => {
   const { listSublayers } = root;
  const activeSublayers = layerService.getActive(listSublayers);
  // TODO:
  const activeLayers = layerService.groupByTopLayer(activeSublayers).filter(x => x.layerId !== 47);

  const { mapType } = map;

  return { 
    activeLayers,
    mapType
  }
};

export default connect(mapStateToProps)(Map);