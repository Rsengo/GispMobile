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

const Map = ({ activeLayers }) => {
  return (
    <MapView 
      style={styles.map}
      mapType={MAP_TYPES.NONE}
    >
      {activeLayers.map(layerInfo => {
        const url = getWmsLayerUrl(layerInfo);
        return (
          <WMSTile urlTemplate={url} />
        )
      })}
    </MapView>
  );
};

const mapStateToProps = (state) => {
  const { listSublayers } = state.root;
  const activeSublayers = layerService.getActive(listSublayers);
  const activeLayers = layerService.groupByTopLayer(activeSublayers);

  return { activeLayers }
};

export default connect(mapStateToProps)(Map);