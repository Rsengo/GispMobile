
import React from 'react';
import Item from "./CrsSelectionDialog.Item";

const Content = ({ items, selectedItemId, onSelect }) => (
    items.map(item => {
        const { id } = item;
        return (
            <Item 
                key={id} 
                onSelect={onSelect} 
                item={item} 
                selectedItemId={selectedItemId} 
            />
        );
    })
);

export default Content;