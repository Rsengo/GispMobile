import React from 'react';
import { Dialog } from 'react-native-paper';
import AttributesDialogContent from './AttributesDialog.Content';
import { useTranslation } from 'react-i18next';

const AttributesDialog = ({ isVisible, onClose, attributes }) => {
    const [translate] = useTranslation();
    const onCloseCallback = React.useCallback(onClose, []);

    return (
        <Dialog
            visible={isVisible}
            onDismiss={onCloseCallback}
        >
            <Dialog.Title>{translate('search.dialog.title')}</Dialog.Title>
            <Dialog.Content>
                <AttributesDialogContent attributes={attributes} />
            </Dialog.Content>
        </Dialog>
    )
};

export default AttributesDialog;