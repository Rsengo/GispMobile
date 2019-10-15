import React from 'react';
import { ScrollView, View } from 'react-native';
import { Paragraph, Dialog, Divider } from 'react-native-paper';
import styles from './SearchItemAttributesDialog.styles';

const DEFAULT_ATTR_VALUE = '<Не задано>';

const SearchItemAttributesDialog = ({isVisible, onClose, attributes}) => {
    return (
        <Dialog
            visible={isVisible}
            onDismiss={onClose}
        >
            <Dialog.Title>Свойства объекта</Dialog.Title>
            <Dialog.Content>
                <SearchItemAttributesDialogContent attributes={attributes} />
            </Dialog.Content>
        </Dialog>
    )
};

const SearchItemAttributesDialogContent = ({ attributes }) => {
    const attrKeys = Object.keys(attributes);
    return (
        <ScrollView>
            {
                attrKeys.map(attrKey => (
                    <SearchItemAttributesDialogItem 
                        attrKey={attrKey} 
                        attrVal={attributes[attrKey] || DEFAULT_ATTR_VALUE} 
                    />
                ))
            }
        </ScrollView>
    );
};

const SearchItemAttributesDialogItem = ({ attrKey, attrVal }) => {
    const attrInfo = `${attrKey}: ${attrVal}`; 
    return (
        <View key={attrKey} style={styles.attributeContainer}>
            <Paragraph>{attrInfo}</Paragraph>
            <Divider />
        </View>
    );
};

export default SearchItemAttributesDialog;