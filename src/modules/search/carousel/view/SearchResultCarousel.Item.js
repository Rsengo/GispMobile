import React from 'react';
import { View } from 'react-native';
import { itemStyles as styles } from './SearchResultCarousel.styles';
import { Headline, Caption, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const DEFAULT_ITEM_NAME = 'search.carousel.defaultItemName';

const Item = ({ 
    attributes, 
    displayFieldName, 
    layerName, 
    sublayerName, 
    openDialog 
}) => {
    const [translate] = useTranslation();
    const openDialogCallback = React.useCallback(
        () => openDialog(attributes), 
        [attributes]
    );
    
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
                <Headline>
                    {
                        attributes[displayFieldName] || 
                        translate(DEFAULT_ITEM_NAME)}
                </Headline>
                <Caption>{layerName}</Caption>
                <Caption>{sublayerName}</Caption>
            </View>
            <View style={styles.itemActions}>
                <Button 
                    mode="outlined" 
                    onPress={openDialogCallback}
                >
                    {translate('search.carousel.showPropsButton')}
                </Button>
            </View>
        </View>
    )
};

export default Item;