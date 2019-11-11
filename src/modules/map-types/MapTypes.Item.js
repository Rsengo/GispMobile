import React from 'react';
import { Avatar, Badge, TouchableRipple } from 'react-native-paper';
import { View, Text } from 'react-native';
import styles from './MapTypes.styles';
import { useTranslation } from 'react-i18next';

const SelectedBadge = () => (
    <Badge style={styles.Badge}>✔</Badge>
);

const MapTypesItem = ({ title, type, img, selected, selectItem }) => {
    const [translate] = useTranslation();
    const selectItemCallback = React.useCallback(
        () => selectItem(type), 
        [type]
    );

    return (
        <View style={styles.item}>
            <TouchableRipple onPress={selectItemCallback}>
                <Avatar.Image 
                    size={72}
                    source={img}
                    style={styles.icon}
                />
            </TouchableRipple>
            <Text style={styles.text}>{translate(title)}</Text>
            {selected ? (<SelectedBadge />) : null}
        </View>
    );
}

export { SelectedBadge };
export default MapTypesItem;
