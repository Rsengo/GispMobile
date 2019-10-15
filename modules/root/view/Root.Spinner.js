import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';
import { spinnerStyles as styles } from './Root.styles';

const Spinner = () => (
    <View style={styles.spinner}>
        <ActivityIndicator animating={true} size='large' />
    </View>
);

export default Spinner;