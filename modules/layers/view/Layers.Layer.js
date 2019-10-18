import * as React from 'react';
import { View } from 'react-native';
import { List, Checkbox } from 'react-native-paper';
import Legend from './Layers.Legend';
import { LayerTreeItemTypes } from '../../../constants';
import { layerStyles as styles } from './Layers.styles';

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

const LayerCheckbox = ({ itemId, selected, activateLayer }) => (
  <View style={styles.checkboxContainer}>
    <Checkbox 
      status={selected ? 'checked' : 'unchecked'} 
      onPress={() => activateLayer(itemId, !selected)}
    />
  </View>
);

const LayerRow = ({ title, layerKey, childNodes }) => (
  <View style={styles.itemContainer}>
    <List.Accordion title={title} key={layerKey}>
      {childNodes}
    </List.Accordion>
  </View>
);

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
        <LayerCheckbox 
          itemId={itemId} 
          selected={selected} 
          activateLayer={activateLayer} 
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