import React from 'react';
import { Chip } from 'react-native-paper';

const Item = ({ selectedItemId, onSelect, item }) => {
    const { name, id } = item;
    return (
        <Chip 
            selected={selectedItemId === id}
            onPress={() => onSelect(item)}
        >
            {name}
        </Chip>
    );
};

export default Item;