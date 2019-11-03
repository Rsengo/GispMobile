import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './CoordinateJump.styles';
import { useTranslation } from 'react-i18next';

const Controls = ({ showOnMap }) => {
    const [translate] = useTranslation();

    return (
        <View style={styles.controls}>
            <Button 
                mode="outlined" 
                onPress={showOnMap}
            >
                {translate('coordinateJump.jumpButton')}
            </Button>
        </View>
    );
}

export default Controls;