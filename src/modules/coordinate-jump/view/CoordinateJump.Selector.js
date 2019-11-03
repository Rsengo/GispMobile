import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './CoordinateJump.styles';

const Selector = ({ openSelector, label }) => (
    <View style={styles.selector}>
        <Button 
            mode='text'
            onPress={openSelector}
        >
            {label}
        </Button>
    </View>
);

export default Selector;