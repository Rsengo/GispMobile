import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './CoordinateTransition.styles';

const CoordinateInputsDegree = () => {
    const [state, setState] = React.useState({
        grad: 0,
        min: 0,
        sec: 0
    });
    const { grad, min, sec } = state;
    return(
        <View style={styles.inputsContainer}>
            <TextInput
                style={styles.input}
                label='Градусы'
                value={grad}
                keyboardType='decimal-pad'
                onChangeText={grad => setState({ ...state, grad })}
            />
            <TextInput
                style={styles.input}
                label='Минуты'
                value={min}
                keyboardType='decimal-pad'
                onChangeText={min => setState({ ...state, min })}
            />
            <TextInput
                style={styles.input}
                label='Секунды'
                value={sec}
                keyboardType='decimal-pad'
                onChangeText={sec => setState({ ...state, sec })}
            />
        </View>
    );
}

export default CoordinateInputsDegree;