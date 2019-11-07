import React from 'react';
import { TextInput } from 'react-native-paper';
import { degreeInputStyles as styles} from './CoordinateInputs.styles';
import { View } from 'react-native'
import { Subheading } from 'react-native-paper';
import { degree } from './CoordinateInputs.fields'
import { useTranslation } from 'react-i18next';

const _degreeToMetric = ({ degree, minute, second }) => 
    degree + minute / 60 + second / 3600;

const _degreesToDouble = (coord) => {
    const { latitude, longitude } = coord;

    return {
        latitude: _degreeToMetric(latitude),
        longitude: _degreeToMetric(longitude)
    };
}

const CoordinateInputsDegree = ({ coordinate, onChange }) => {
    const [state, setState] = React.useState({
        latitude: {
            degree: 0,
            minute: 0,
            second: 0
        },
        longitude: {
            degree: 0,
            minute: 0,
            second: 0
        }
    });

    const [translate] = useTranslation();

    const { latitudeFields, longitudeFields } = degree;

    return(
        <React.Fragment>
            <Subheading>{translate('coordinateJump.inputs.longitude')}</Subheading>
            <View style={styles.container}>
                {
                    longitudeFields.map(({ label, valueProp }) => (
                        <TextInput
                            key={valueProp}
                            style={styles.input}
                            label={translate(label)}
                            value={state.longitude[valueProp].toString()}
                            keyboardType='decimal-pad'
                            onChangeText={val => {
                                const coord = { ...state, longitude: { ...state.longitude, [valueProp]: +val } };
                                const payload = _degreesToDouble(coord);
                                onChange({ ...coordinate, ...payload })
                                setState({ ...state, ...coord });
                            }}
                        />
                    ))
                }
            </View>
            <Subheading>{translate('coordinateJump.inputs.latitude')}</Subheading>
            <View style={styles.container}>
                {
                    latitudeFields.map(({ label, valueProp }) => (
                        <TextInput
                            key={valueProp}
                            style={styles.input}
                            label={translate(label)}
                            value={state.latitude[valueProp].toString()}
                            keyboardType='decimal-pad'
                            onChangeText={val => {
                                const coord = { ...state, latitude: { ...state.latitude, [valueProp]: +val } };
                                const payload = _degreesToDouble(coord);
                                onChange({ ...coordinate, ...payload })
                                setState({ ...state, ...coord });
                            }}
                        />
                    ))
                }
            </View>
        </React.Fragment>
    );
}

export default CoordinateInputsDegree;