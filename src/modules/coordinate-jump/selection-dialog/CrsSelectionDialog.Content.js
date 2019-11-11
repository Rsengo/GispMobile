
import React from 'react';
import CrsSelectionDialogItem from './CrsSelectionDialog.Item';
import { List } from 'react-native-paper';

const CrsSelectionDialogContent = ({ items, selectedItemId, onSelect }) => (
    <List.Section>
        {
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
        }
    </List.Section>
);

export default CrsSelectionDialogContent;