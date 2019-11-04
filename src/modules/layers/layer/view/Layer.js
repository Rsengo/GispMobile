import * as React from 'react';
import { View } from 'react-native';
import LayerCheckbox from './Layer.Checkbox';
import LayerLegend from './Layer.Legend';
import LayerRow from './Layer.Row';
import { LayerTreeItemTypes } from '../../../../../constants';
import styles from './Layer.styles';

const mapChildToComponent = (child, activateLayer) => {
  const { key, Id, ...childProps } = child;
  return child.type === LayerTreeItemTypes.LEGEND 
      ? (
          <LayerLegend 
            {...childProps} 
            legendKey={key} 
            key={key}
          />
        ) 
      : (
          <Layer 
            {...childProps} 
            layerKey={key}
            key={key} 
            activateLayer={activateLayer} 
            itemId={Id} 
          />
        );
}

const Layer = ({ 
    itemId,
    children,
    layerKey,
    selected,
    title,
    activateLayer
 }) => {
   const childNodes = React.useMemo(() => {
     return children && children.length 
     ? children.map(x => mapChildToComponent(x, activateLayer)) 
     : [];
   }, [children]);
   const activateLayerCallback = React.useCallback(activateLayer, []);

    return (
      <View style={styles.container}>
        <LayerCheckbox 
          itemId={itemId} 
          selected={selected} 
          activateLayer={activateLayerCallback} 
        />
        <LayerRow
          title={title}
          layerKey={layerKey}
          childNodes={childNodes}
        />
      </View>
    )
}

export default Layer;