import React from 'react';
import { IconButton } from 'react-native-paper';
import { View, Text } from 'react-native';
import styles from './MapTypes.styles';
import { useTranslation } from 'react-i18next';

const MapTypesItem = ({ title, type, icon, selected, selectItem }) => {
    const [translate] = useTranslation();
    const selectItemCallback = React.useCallback(
        () => selectItem(type), 
        [type]
    );

    const iconStyle = React.useMemo(
        () => selected ? styles.iconSelected : styles.icon, 
        [selected]
    )

    //TODO: title translate
    //TODO: selected
    return (
        <View style={styles.item}>
            <IconButton 
                icon={icon}
                style={iconStyle}
                onPress={selectItemCallback}
            />
            <Text style={styles.text}>{translate(title)}</Text>
        </View>
    );
}

export default MapTypesItem;
