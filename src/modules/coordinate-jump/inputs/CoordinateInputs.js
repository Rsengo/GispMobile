import React from 'react';
import { View } from 'react-native';
import { inputContainerStyles as styles} from './CoordinateInputs.styles';
import CoordinateInputsDegree from './CoordinateInputs.Degree';
import CoordinateInputsMetric from './CoordinateInputs.Metric';
import { CrsTypes } from '../../../../constants';

const CoordinateInputs = ({ type, coordinate, onChange }) => {
    const metric = type === CrsTypes.Metric;
    
    return (
        <View style={styles.inputsContainer}>
            { 
                metric 
                    ? <CoordinateInputsMetric coordinate={coordinate} onChange={onChange} /> 
                    : <CoordinateInputsDegree coordinate={coordinate} onChange={onChange} /> 
            }
        </View>
    );
}

export default CoordinateInputs;