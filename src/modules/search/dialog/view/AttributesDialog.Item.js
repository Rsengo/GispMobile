import React from 'react';
import { View } from 'react-native';
import { Paragraph, Divider } from 'react-native-paper';
import { itemStyles as styles} from './AttributesDialog.styles';

const Item = ({ attrKey, attrVal }) => {
    const attrInfo = React.useMemo(
        () => `${attrKey}: ${attrVal}`, 
        [attrKey, attrVal]
    );
     
    return (
        <View key={attrKey} style={styles.attributeContainer}>
            <Paragraph>{attrInfo}</Paragraph>
            <Divider />
        </View>
    );
};

export default Item;