import React from 'react';
import { ScrollView } from 'react-native';
import Item from './AttributesDialog.Item';
import { withTranslation } from 'react-i18next';

const DEFAULT_ATTR_VALUE = 'search.dialog.defaultAttrValue';

const Content = ({ attributes, t }) => {
    const attrKeys = Object.keys(attributes);
    return (
        <ScrollView>
            {
                attrKeys.map(attrKey => (
                    <Item 
                        key={attrKey}
                        attrKey={attrKey} 
                        attrVal={attributes[attrKey] || t(DEFAULT_ATTR_VALUE)} 
                    />
                ))
            }
        </ScrollView>
    );
};

export default withTranslation()(Content);