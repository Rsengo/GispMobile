import React from 'react';
import { ScrollView } from 'react-native';
import AttributesDialogItem from './AttributesDialog.Item';
import { useTranslation } from 'react-i18next';

const DEFAULT_ATTR_VALUE = 'search.dialog.defaultAttrValue';

const AttributesDialogContent = ({ attributes }) => {
    const [translate] = useTranslation();
    
    const attrKeys = React.useMemo(
        () => Object.keys(attributes), 
        [attributes]
    );

    return (
        <ScrollView>
            {
                attrKeys.map(attrKey => (
                    <AttributesDialogItem 
                        key={attrKey}
                        attrKey={attrKey} 
                        attrVal={attributes[attrKey] || translate(DEFAULT_ATTR_VALUE)} 
                    />
                ))
            }
        </ScrollView>
    );
};

export default AttributesDialogContent;