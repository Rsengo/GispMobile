import React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import CrsSelectionDialogContent from './CrsSelectionDialog.Content';
import { useTranslation } from 'react-i18next';

const CrsSelectionDialog = ({
    visible, 
    onDismiss, 
    onSelect,
    items,
    selectedItem
}) => {
    const [translate] = useTranslation();
    const { id: selectedItemId } = selectedItem;

    return (
        <Portal>
            <Dialog
                visible={visible}
                onDismiss={onDismiss}
            >
                <Dialog.Title>{translate('coordinateJump.selectionDialog.title')}</Dialog.Title>
                <Dialog.Content>
                    <CrsSelectionDialogContent 
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