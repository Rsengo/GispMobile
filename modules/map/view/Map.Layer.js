import React from 'react';
import { getWmsLayerUrl } from '../services/wmsService';
import { WMSTile } from 'react-native-maps';

const Layer = ({ layerId, sublayers, layerOrder }) => (
    <WMSTile 
      key={layerId}
      urlTemplate={getWmsLayerUrl(layerId, sublayers)} 
      tileSize={256}
      zIndex={layerOrder}
      opacity={1}
    />
);

export default Layer;