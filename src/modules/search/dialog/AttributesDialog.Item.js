import React from 'react';
import { View } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { itemStyles as styles} from './AttributesDialog.styles';

const AttributesDialogItem = (props) =>  (
    <View style={styles.attributeContainer}>
        <List.Item {...props} />
        <Divider />
    </View>
);

export default AttributesDialogItem;