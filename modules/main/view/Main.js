import React from 'react';
import { View } from 'react-native';
import styles from './Main.styles';
import { Map } from '../../map';
import { Controls } from '../../controls';

const Main = () => {
  return (
    <View style={styles.container}>
      <Map />
      <Controls />
    </View>
  );
};

export default Main;