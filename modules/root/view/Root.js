import React from 'react';
import { View } from 'react-native';
import styles from './Root.styles';
import { Map } from '../../map';
import { Controls } from '../../controls';

const Root = () => {
  return (
    <View style={styles.container}>
      <Map />
      <Controls />
    </View>
  );
};

export default Root;