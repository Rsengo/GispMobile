import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './CoordinateJump.styles';

const CoordinateJumpSelector = ({ openSelector, label }) => {
    const openSelectorCallback = React.useCallback(openSelector, []);

    return (
        <View style={styles.selector}>
            <Button 
                mode='text'
                onPress={openSelectorCallback}
            >
                {label}
            </Button>
        </View>
    );
};

export default CoordinateJumpSelector;