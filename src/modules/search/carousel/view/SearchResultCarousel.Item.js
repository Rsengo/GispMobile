import React from 'react';
import { View } from 'react-native';
import { itemStyles as styles } from './SearchResultCarousel.styles';
import { Headline, Caption, Button } from 'react-native-paper';
import { withTranslation } from 'react-i18next';

const DEFAULT_ITEM_NAME = 'search.carousel.defaultItemName';

const Item = ({ item, openDialog, t }) => {
    const { 
        attributes, 
        displayFieldName, 
        layerName, 
        sublayerName 
    } = item;
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
                <Headline>{attributes[displayFieldName] || t(DEFAULT_ITEM_NAME)}</Headline>
                <Caption>{layerName}</Caption>
                <Caption>{sublayerName}</Caption>
            </View>
            <View style={styles.itemActions}>
                <Button 
                    mode="outlined" 
                    onPress={() => openDialog(attributes)}
                >
                    {t('search.carousel.showPropsButton')}
                </Button>
            </View>
        </View>
    )
};

export default withTranslation()(Item);