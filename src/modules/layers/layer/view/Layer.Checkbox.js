import * as React from 'react';
import { View } from 'react-native';
import { Checkbox as PaperCheckbox } from 'react-native-paper';
import styles from './Layer.styles';

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

export default LayerCheckbox;