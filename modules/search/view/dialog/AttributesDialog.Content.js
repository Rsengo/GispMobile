import React from 'react';
import { ScrollView } from 'react-native';
import Item from './AttributesDialog.Item';

const DEFAULT_ATTR_VALUE = '<Не задано>';

const Content = ({ attributes }) => {
    const attrKeys = Object.keys(attributes);
    return (
        <ScrollView>
            {
                attrKeys.map(attrKey => (
                    <Item 
                        attrKey={attrKey} 
                        attrVal={attributes[attrKey] || DEFAULT_ATTR_VALUE} 
                    />
                ))
            }
        </ScrollView>
    );
};

export default Content;