import * as React from 'react';
import { View } from 'react-native';
import { Checkbox as PaperCheckbox } from 'react-native-paper';
import styles from './Layer.styles';

const LayerCheckbox = ({ itemId, selected, activateLayer }) => (
  <View style={styles.checkboxContainer}>
    <PaperCheckbox 
      status={selected ? 'checked' : 'unchecked'} 
      onPress={() => activateLayer(itemId, !selected)}
    />
  </View>
);

export default LayerCheckbox;