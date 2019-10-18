import React from 'react';
import { View } from 'react-native';
import { inputContainerStyles as styles} from './CoordinateInputs.styles';
import Degree from './CoordinateInputs.Degree';
import Metric from './CoordinateInputs.Metric';
import { CrsTypes } from '../../../../constants';

const CoordinateInputs = ({ type, coordinate, onChange }) => {
    const metric = type === CrsTypes.Metric;
    return(
        <View style={styles.inputsContainer}>
            { 
                metric 
                    ? <Metric coordinate={coordinate} onChange={onChange} /> 
                    : <Degree coordinate={coordinate} onChange={onChange} /> 
            }
        </View>
    );
}

export default CoordinateInputs;