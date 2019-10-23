import React from 'react';
import { TextInput } from 'react-native-paper';
import { degreeInputStyles as styles} from './CoordinateInputs.styles';
import { View } from 'react-native'
import { Subheading } from 'react-native-paper';
import { degree } from '../data/CoordinateInputs.fields'

const calcLatitude = (coordinate) => {
    const { grad_lat: grad, min_lat: min, sec_lat: sec } = coordinate;
    return (+grad) + (+min) / 60 + (+sec) / 3600;
}

const calcLongitude = (coordinate) => {
    const { grad_long: grad, min_long: min, sec_long: sec } = coordinate;
    return (+grad) + (+min) / 60 + (+sec) / 3600;
}

const Degree = ({ coordinate, onChange }) => {
    const [state, setState] = React.useState({
        grad_long: '0',
        min_long: '0',
        sec_long: '0',
        grad_lat: '0',
        min_lat: '0',
        sec_lat: '0'
    });
    const { latitudeFields, longitudeFields } = degree;
    return(
        <React.Fragment>
            <Subheading>Долгота</Subheading>
            <View style={styles.container}>
                {
                    longitudeFields.map(({ label, valueProp }) => (
                        <TextInput
                            style={styles.input}
                            label={label}
                            value={state[valueProp]}
                            keyboardType='decimal-pad'
                            onChangeText={val => {
                                const longitude = calcLongitude({ ...state, [valueProp]: val });
                                onChange({ ...coordinate, longitude });
                                setState({ ...state, [valueProp]: val });
                            }}
                        />
                    ))
                }
            </View>
            <Subheading>Широта</Subheading>
            <View style={styles.container}>
                {
                    latitudeFields.map(({ label, valueProp }) => (
                        <TextInput
                            style={styles.input}
                            label={label}
                            value={state[valueProp]}
                            keyboardType='decimal-pad'
                            onChangeText={val => {
                                const latitude = calcLatitude({ ...state, [valueProp]: val });
                                onChange({ ...coordinate, latitude });
                                setState({ ...state, [valueProp]: val });
                            }}
                        />
                    ))
                }
            </View>
        </React.Fragment>
    );
}

export default Degree;