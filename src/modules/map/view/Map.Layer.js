import React from 'react';
import { wmsService } from '../services';
import { WMSTile } from 'react-native-maps';

const MapLayer = ({ layerId, sublayers, layerOrder }) => {
  const url = React.useMemo(
    () => wmsService.getWmsLayerUrl(layerId, sublayers), 
    [layerId, sublayers]
  );

  return (
    <WMSTile 
      key={layerId}
      urlTemplate={url} 
      tileSize={256}
      zIndex={layerOrder}
      opacity={1}
    />
  );
};

export default MapLayer;