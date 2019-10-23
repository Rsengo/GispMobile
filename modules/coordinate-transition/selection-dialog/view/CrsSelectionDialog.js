import React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import Content from './CrsSelectionDialog.Content';

const CrsSelectionDialog = ({
    visible, 
    onDismiss, 
    onSelect,
    items,
    selectedItem
}) => {
    const { id: selectedItemId } = selectedItem;
    return (
        <Portal>
            <Dialog
                visible={visible}
                onDismiss={onDismiss}
            >
                <Dialog.Title>Выбор системы координат</Dialog.Title>
                <Dialog.Content>
                    <Content 
                        items={items} 
                        selectedItemId={selectedItemId} 
                        onSelect={onSelect} 
                    />
                </Dialog.Content>
            </Dialog>
        </Portal>
      );
};

export default CrsSelectionDialog;