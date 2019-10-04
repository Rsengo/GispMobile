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

const Map = ({ activeLayers }) => {
  var defaultExtent = [8472663.457, 8459624.919, 8919395.151, 8703022.885]
  const ir1 = {
    latitude: defaultExtent[0],
    longitude: defaultExtent[1],
    latitudeDelta: -(defaultExtent[2] - defaultExtent[0]),
    longitudeDelta: -(defaultExtent[3] - defaultExtent[1]),
  }
  const ir2 = {
    latitude: defaultExtent[1],
    longitude: defaultExtent[0],
    latitudeDelta: -(defaultExtent[3] - defaultExtent[1]),
    longitudeDelta: -(defaultExtent[2] - defaultExtent[0]),
  }
  const ir3 = {
    latitude: defaultExtent[0],
    longitude: defaultExtent[2],
    latitudeDelta: -(defaultExtent[1] - defaultExtent[0]),
    longitudeDelta: -(defaultExtent[3] - defaultExtent[2]),
  }  
  const ir4 = {
    latitude: defaultExtent[2],
    longitude: defaultExtent[0],
    latitudeDelta: -(defaultExtent[3] - defaultExtent[2]),
    longitudeDelta: -(defaultExtent[1] - defaultExtent[0]),
  }
  return (
    <MapView 
      style={styles.map}
      mapType={MAP_TYPES.STANDARD}
      initialRegion={ir4}
      provider={null}
    >
      {activeLayers.map(layerInfo => {
        const url = getWmsLayerUrl(layerInfo);
        return (
          <WMSTile 
            urlTemplate={url} 
            tileSize={250}
            zIndex={layerInfo.layerOrder}
            opacity={1}
          />
        )
      })}
    </MapView>
  );
};

const mapStateToProps = (state) => {
  const { listSublayers } = state.root;
  const activeSublayers = layerService.getActive(listSublayers);
  // TODO:
  const activeLayers = layerService.groupByTopLayer(activeSublayers).filter(x => x.layerId !== 47);

  return { activeLayers }
};

export default connect(mapStateToProps)(Map);