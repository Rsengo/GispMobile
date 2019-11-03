import React from 'react';
import { Dialog } from 'react-native-paper';
import Content from './AttributesDialog.Content';
import { withTranslation } from 'react-i18next';

const AttributesDialog = ({ isVisible, onClose, attributes, t }) => {
    return (
        <Dialog
            visible={isVisible}
            onDismiss={onClose}
        >
            <Dialog.Title>{t('search.dialog.title')}</Dialog.Title>
            <Dialog.Content>
                <Content attributes={attributes} />
            </Dialog.Content>
        </Dialog>
    )
};

export default withTranslation()(AttributesDialog);