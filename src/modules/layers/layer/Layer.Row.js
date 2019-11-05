import * as React from 'react';
import { branch } from 'recompose';
import LayerLegend from './Layer.Legend';
import { LayerTreeItemTypes } from '../../../../constants';

const LayerRow = ({ Id, activateLayer, ...childProps }) => {
  const activateLayerCallback = React.useCallback(activateLayer, []);

  const { Id, ...childProps } = child;

    return (
        <Layer 
            {...childProps} 
            activateLayer={activateLayerCallback} 
            itemId={Id} 
        />
    );
};

const LegendRow = ({ Id, ...childProps }) => { 
    const { Id, ...childProps } = child;
  
    return (
        <LayerLegend 
            {...childProps} 
        />
    ) 
};

export default branch(
    ({type}) => type === LayerTreeItemTypes.LEGEND,
    LegendRow,
    LayerRow
)(null);