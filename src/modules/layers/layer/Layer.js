import * as React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import styles from './Layer.styles';
import LayerRow from './Layer.Row';

const LayerCheckbox = ({ itemId, selected, activateLayer }) => {
  const activateLayerCallback = React.useCallback(() => {
    activateLayer(itemId, !selected)
  }, [itemId, selected]);
  
  return (
    <View style={styles.checkboxContainer}>
      <PaperCheckbox 
        status={selected ? 'checked' : 'unchecked'} 
        onPress={activateLayerCallback}
      />
    </View>
  );
}

const LayerTitle = ({ title, layerKey, children }) => (
  <View style={styles.itemContainer}>
    <List.Accordion title={title} key={layerKey}>
      {children}
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
   const activateLayerCallback = React.useCallback(activateLayer, []);

    return (
      <View style={styles.container}>
        <LayerCheckbox 
          itemId={itemId} 
          selected={selected} 
          activateLayer={activateLayerCallback} 
        />
        <LayerTitle
          title={title}
          layerKey={layerKey}
          childNodes={childNodes}
        >
          {
            children && children.length 
              ? children.map(x => <LayerRow activateLayer={activateLayer} {...x} />) 
              : null
          }
        </LayerTitle>
      </View>
    )
}

export { LayerCheckbox, LayerTitle };
export default Layer;