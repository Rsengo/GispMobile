import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './CoordinateTransition.styles';

const CoordinateInputsMetric = () => {
    const [state, setState] = React.useState({
        longitude: 0,
        latitude: 0
    });
    const { longitude, latitude } = state;
    return(
        <View style={styles.inputsContainer}>
            <TextInput
                style={styles.input}
                label='Долгота'
                value={longitude}
                keyboardType='decimal-pad'
                onChangeText={longitude => setState({ ...state, longitude })}
            />
            <TextInput
                style={styles.input}
                label='Широта'
                value={latitude}
                keyboardType='decimal-pad'
                onChangeText={latitude => setState({ ...state, latitude })}
            />
        </View>
    );
}

export default CoordinateInputsMetric;