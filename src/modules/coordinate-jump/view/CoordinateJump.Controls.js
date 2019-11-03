import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './CoordinateJump.styles';
import { withTranslation } from 'react-i18next';

const Controls = ({ showOnMap, t }) => (
    <View style={styles.controls}>
        <Button 
            mode="outlined" 
            onPress={showOnMap}
        >
            {t('coordinateJump.jumpButton')}
        </Button>
    </View>
);

export default withTranslation()(Controls);