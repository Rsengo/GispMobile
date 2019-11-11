import React from 'react';
import { Switch, List } from 'react-native-paper';
import { View } from 'react-native';

const CrsSelectionDialogItem = ({ selectedItemId, onSelect, item }) => {
    const { name, id } = item;

    const selected = React.useMemo(
        () => selectedItemId === id, 
        [id, selectedItemId]
    );

    const onPress = React.useCallback(
        () => onSelect(item), 
        [item]
    );

    return (
            <List.Item
                title={name}
                right={() => (<Switch value={selected} onValueChange={onPress} />)}
                onPress={onPress}
            />
    );
};

export default CrsSelectionDialogItem;