import React from 'react';
import { RadioButton } from 'react-native-paper';

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
        <RadioButton 
            value={selectedItemId === id}
            status={selectedItemId === id ? 'checked' : 'unchecked'}
            onPress={onPress}
        />
    );
};

export default CrsSelectionDialogItem;