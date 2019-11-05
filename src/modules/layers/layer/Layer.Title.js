import * as React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import styles from './Layer.styles';

const LayerTitle = ({ title, layerKey, childNodes }) => (
  <View style={styles.itemContainer}>
    <List.Accordion title={title} key={layerKey}>
      {childNodes}
    </List.Accordion>
  </View>
);

export default LayerTitle;