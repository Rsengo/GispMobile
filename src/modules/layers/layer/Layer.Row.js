import * as React from 'react';
import LayerLegend from './Layer.Legend';
import Layer from './Layer';
import { LayerTreeItemTypes } from '../../../../constants';

const LayerRow = ({ Id, activateLayer, type, ...rest }) => {
  const activateLayerCallback = React.useCallback(activateLayer, []);

    return type === LayerTreeItemTypes.LEGEND
    ? (
        <LayerLegend 
            {...rest} 
        />
    ) 
    : (
        <Layer 
            {...rest} 
            activateLayer={activateLayerCallback} 
            itemId={Id} 
        />
    )
};

export default LayerRow;