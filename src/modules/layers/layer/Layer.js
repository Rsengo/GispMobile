import * as React from 'react';
import { View } from 'react-native';
import LayerCheckbox from './Layer.Checkbox';
import LayerTitle from './Layer.Title';
import styles from './Layer.styles';
import LayerRow from './Layer.Row';

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
     ? children.map(x => <LayerRow activateLayer={activateLayer} {...x} />) 
     : null;
   }, [children]);
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
        />
      </View>
    )
}

export default Layer;