import * as React from 'react';
import { branch } from 'recompose';
import LayerLegend from './Layer.Legend';
import Layer from './Layer';
import { LayerTreeItemTypes } from '../../../../constants';

const LayerRow = ({ Id, activateLayer, ...rest }) => {
  const activateLayerCallback = React.useCallback(activateLayer, []);

    return (
        <Layer 
            {...rest} 
            activateLayer={activateLayerCallback} 
            itemId={Id} 
        />
    );
};

const LegendRow = (props) => (
    <LayerLegend 
        {...props} 
    />
);

export default branch(
    ({type}) => type === LayerTreeItemTypes.LEGEND,
    LegendRow,
    LayerRow
)(null);