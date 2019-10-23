import React from 'react';
import { Dialog } from 'react-native-paper';
import Content from './AttributesDialog.Content';

const AttributesDialog = ({isVisible, onClose, attributes}) => {
    return (
        <Dialog
            visible={isVisible}
            onDismiss={onClose}
        >
            <Dialog.Title>Свойства объекта</Dialog.Title>
            <Dialog.Content>
                <Content attributes={attributes} />
            </Dialog.Content>
        </Dialog>
    )
};

export default AttributesDialog;