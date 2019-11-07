import React from 'react';
import { List, Headline } from 'react-native-paper';
import AttributesDialogItem from './AttributesDialog.Item';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';

const DEFAULT_ATTR_VALUE = 'search.dialog.defaultAttrValue';

const AttributesDialogContent = ({ attributes, displayName }) => {
    const [translate] = useTranslation();
    
    const attrKeys = React.useMemo(
        () => Object.keys(attributes), 
        [attributes]
    );

    return (
        <List.Section>
            {
                attrKeys.map(attrKey => (
                    <AttributesDialogItem
                        key={attrKey}
                        description={attrKey} 
                        title={attributes[attrKey] || translate(DEFAULT_ATTR_VALUE)} 
                    />
                ))
            }
        </List.Section>
    );
};

export default AttributesDialogContent;