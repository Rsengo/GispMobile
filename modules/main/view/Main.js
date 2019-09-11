import React from 'react';
import { View } from 'react-native';
import styles from './Main.styles';
import { Map } from '../../map';
import { Controls } from '../../map-controls';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Map />
      <Controls navigation={navigation} />
    </View>
  );
};

export default Main;