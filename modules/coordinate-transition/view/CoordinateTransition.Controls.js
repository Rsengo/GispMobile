import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './CoordinateTransition.styles';

const Controls = ({ showOnMap }) => (
    <View style={styles.controls}>
        <Button 
            mode="outlined" 
            onPress={showOnMap}
        >
            Перейти
        </Button>
    </View>
);

export default Controls;