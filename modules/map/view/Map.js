import React from 'react';
import styles from './Map.styles';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <MapView style={styles.map} />
  );
};

export default Map;