import * as React from 'react';
import { View } from 'react-native';
import Checkbox from './Layer.Checkbox';
import Legend from './Layers.Legend';
import Row from './Layer.Row';
import { LayerTreeItemTypes } from '../../../../constants';
import styles from './Layer.styles';

const mapChildToComponent = (child, activateLayer) => {
  const { key, Id, ...childProps } = child;
  return child.type === LayerTreeItemTypes.LEGEND 
      ? (
          <Legend 
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
    const childNodes = children && children.length 
        ? children.map(x => mapChildToComponent(x, activateLayer)) 
        : [];
    return (
      <View style={styles.container}>
        <Checkbox 
          itemId={itemId} 
          selected={selected} 
          activateLayer={activateLayer} 
        />
        <Row
          title={title}
          layerKey={layerKey}
          childNodes={childNodes}
        />
      </View>
    )
}

export default Layer;