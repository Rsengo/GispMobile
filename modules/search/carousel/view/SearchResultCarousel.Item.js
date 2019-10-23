import React from 'react';
import { View } from 'react-native';
import { itemStyles as styles } from './SearchResultCarousel.styles';
import { Headline, Caption, Button } from 'react-native-paper';

const DEFAULT_ITEM_NAME = 'Без названия';

const Item = ({ item, openDialog }) => {
    const { 
        attributes, 
        displayFieldName, 
        layerName, 
        sublayerName 
    } = item;
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
                <Headline>{attributes[displayFieldName] || DEFAULT_ITEM_NAME}</Headline>
                <Caption>{layerName}</Caption>
                <Caption>{sublayerName}</Caption>
            </View>
            <View style={styles.itemActions}>
                <Button 
                    mode="outlined" 
                    onPress={() => openDialog(attributes)}
                >
                    Показать свойства
                </Button>
            </View>
        </View>
    )
};

export default Item;