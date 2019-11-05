
import React from 'react';
import CrsSelectionDialogItem from "./CrsSelectionDialog.Item";

const CrsSelectionDialogContent = ({ items, selectedItemId, onSelect }) => (
    items.map(item => {
        const { id } = item;
        return (
            <CrsSelectionDialogItem 
                key={id} 
                onSelect={onSelect} 
                item={item} 
                selectedItemId={selectedItemId} 
            />
        );
    })
);

export default CrsSelectionDialogContent;