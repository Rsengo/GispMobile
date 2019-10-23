import React from 'react';
import { TextInput } from 'react-native-paper';
import { metricInputStyles as styles} from './CoordinateInputs.styles';
import { View } from 'react-native'
import { metric } from '../data/CoordinateInputs.fields';

const Metric = ({ coordinate, onChange }) => {
    return(
        <View style={styles.container}>
            {
                metric.map(({ label, valueProp }) => (
                    <TextInput
                        style={styles.input}
                        label={label}
                        value={coordinate[valueProp]}
                        keyboardType='decimal-pad'
                        onChangeText={val => onChange({ ...coordinate, [valueProp]: (+val) })}
                    />
                ))
            }
        </View>
    );
}

export default Metric;