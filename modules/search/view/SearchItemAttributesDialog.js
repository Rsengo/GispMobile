import React from 'react';
import { ScrollView, View } from 'react-native';
import { Paragraph, Dialog, Divider } from 'react-native-paper';
import styles from './SearchItemAttributesDialog.styles';

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
                                <View key={attrKey} style={styles.attributeContainer}>
                                    <Paragraph>{attrInfo}</Paragraph>
                                    <Divider />
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </Dialog.Content>
        </Dialog>
    )
}

export default SearchItemAttributesDialog;