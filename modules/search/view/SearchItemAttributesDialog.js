import React from 'react';
import { ScrollView } from 'react-native';
import { Paragraph, Dialog } from 'react-native-paper';

const DEFAULT_ATTR_VALUE = '<Не задано>';

const SearchItemAttributesDialog = ({isVisible, onClose, attributes}) => {
    const attrKeys = Object.keys(attributes);
    return (
        <Dialog
            visible={isVisible}
            onDismiss={onClose}
        >
            <Dialog.Title>Свойства объекта</Dialog.Title>
            <Dialog.Content>
                <ScrollView>
                    {
                        attrKeys.map(attrKey => {
                            const attrVal = attributes[attrKey] || DEFAULT_ATTR_VALUE;
                            const attrInfo = `${attrKey}: ${attrVal}`;
                        
                            return (
                                <Paragraph key={attrKey}>{attrInfo}</Paragraph>
                            );
                        })
                    }
                </ScrollView>
            </Dialog.Content>
        </Dialog>
    )
}

export default SearchItemAttributesDialog;