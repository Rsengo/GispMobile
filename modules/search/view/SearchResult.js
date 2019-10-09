import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './SearchResult.styles';
import { Headline, Paragraph } from 'react-native-paper';

const entries = [
    {title: 'standard', img: require('../../../assets/map-types/standard.png')},
    {title: 'satellite', img: require('../../../assets/map-types/satellite.png')},
];

const DEFAULT_ITEM_NAME = 'Без названия';

const SearchResult = ({ searchResultsIsOpen, data }) => {
    return(
        searchResultsIsOpen ? (<SearchResultView data={data} />) : null
    );
};

const SearchResultView = ({ searchData }) => (
    <View style={styles.container}>
        <Carousel
            data={searchData}
            renderItem={SearchResultItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={300}
        />
    </View>
);

const SearchResultItem = ({ item }) => {
    const { attributes, displayFieldName } = item;
    const attrKeys = Object.keys(attributes);

    return (
        <ScrollView style={styles.itemContainer}>
            <Headline>{attributes[displayFieldName] || DEFAULT_ITEM_NAME}</Headline>
            {
                attrKeys.map(attrKey => {
                    const attrVal = attributes[attrKey];
                    const attrInfo = `${attrKey}: ${attrVal}`;
                    
                    return (
                        <Paragraph>{attrInfo}</Paragraph>
                    );
                })
            }
        </ScrollView>
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