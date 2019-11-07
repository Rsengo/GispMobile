import React from 'react';
import AttributesDialogContent from './AttributesDialog.Content';
import { BottomSheet } from '../../../components';

const AttributesDialog = ({ isVisible, onClose, attributes, displayName }) => {
    const onCloseCallback = React.useCallback(onClose, []);

    return (
        <BottomSheet isOpen={isVisible} onClose={onCloseCallback} scrollable>
            <AttributesDialogContent attributes={attributes} displayName={displayName} />
        </BottomSheet>
    )
};

export default AttributesDialog;