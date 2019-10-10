import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './SearchResult.styles';
import { Headline, Paragraph, Caption, Button, Dialog } from 'react-native-paper';
import SearchItemAttributesDialog from './SearchItemAttributesDialog';

const DEFAULT_ITEM_NAME = 'Без названия';

const SearchResult = ({ searchResultsIsOpen, searchData }) => {
    return(
        searchResultsIsOpen ? (<SearchResultView data={searchData} />) : null
    );
};

const SearchResultView = ({ data }) => {
    const [state, setState] = React.useState({ dialogOpened: false, attrs: {} });
    const closeDialog = () => setState({ ...state, dialogOpened: false });
    const openDialog = (attrs) => setState({ ...setState, dialogOpened: true, attrs }) 

    const { dialogOpened, attrs } = state;
    return (
        <React.Fragment>
            <View style={styles.container}>
                <Carousel
                    data={data}
                    renderItem={({item}) => <SearchResultItem item={item} openDialog={openDialog} />}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={300}
                />
            </View>
            <SearchItemAttributesDialog 
                isVisible={dialogOpened} 
                onClose={closeDialog}
                attributes={attrs} 
            />
        </React.Fragment>
    );
};

const SearchResultItem = ({ item, openDialog }) => {
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

const mapStateToProps = ({ controls, map }) => {
    const { searchResultsIsOpen } = controls;
    const { searchData } = map;

    return {
        searchResultsIsOpen,
        searchData
    }
};

export default connect(mapStateToProps)(SearchResult);