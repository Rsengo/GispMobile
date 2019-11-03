import React from 'react';
import { wmsService } from '../services';
import { WMSTile } from 'react-native-maps';

const MapLayer = ({ layerId, sublayers, layerOrder }) => {
  const { getWmsLayerUrl } = wmsService;
  
  return (
    <WMSTile 
      key={layerId}
      urlTemplate={getWmsLayerUrl(layerId, sublayers)} 
      tileSize={256}
      zIndex={layerOrder}
      opacity={1}
    />
  );
};

export default MapLayer;