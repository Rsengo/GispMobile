import React from 'react';
import { TextInput } from 'react-native-paper';
import { metricInputStyles as styles} from './CoordinateInputs.styles';
import { View } from 'react-native'
import { metric } from './CoordinateInputs.fields';
import { withTranslation } from 'react-i18next';

const CoordinateInputsMetric = ({ coordinate, onChange, t }) => {
    return(
        <View style={styles.container}>
            {
                metric.map(({ label, valueProp }) => (
                    <TextInput
                        style={styles.input}
                        label={t(label)}
                        value={coordinate[valueProp].toString()}
                        keyboardType='decimal-pad'
                        onChangeText={val => onChange({ ...coordinate, [valueProp]: (+val) })}
                    />
                ))
            }
        </View>
    );
}

export default withTranslation()(CoordinateInputsMetric);