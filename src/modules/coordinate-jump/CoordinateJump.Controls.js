import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './CoordinateJump.styles';
import { useTranslation } from 'react-i18next';

const CoordinateJumpControls = ({ showOnMap }) => {
    const [translate] = useTranslation();

    const showOnMapCallback = React.useCallback(showOnMap, []);

    return (
        <View style={styles.controls}>
            <Button 
                mode="outlined" 
                onPress={showOnMapCallback}
            >
                {translate('coordinateJump.jumpButton')}
            </Button>
        </View>
    );
}

export default CoordinateJumpControls;