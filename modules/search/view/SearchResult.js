import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './SearchResult.styles';
import { BottomSheet } from '../../bottom-sheet'

const entries = [
    {title: 'standard', img: require('../../../assets/map-types/standard.png')},
    {title: 'satellite', img: require('../../../assets/map-types/satellite.png')},
]

const SearchResult = ({ searchResultsIsOpen, data }) => {
    return(
        searchResultsIsOpen ? (<SearchResultView data={data} />) : null
    );
}

const SearchResultView = ({ data }) => (
    <View style={styles.container}>
        <Carousel
            data={entries}
            renderItem={SearchResultItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={300}
        />
    </View>
)

const SearchResultItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Image style={styles.img} source={item.img} />
        <Text style={styles.text}>{ item.title }</Text>
    </View>
);

const mapStateToProps = ({ controls }) => {
    const { searchResultsIsOpen } = controls;

    return {
        searchResultsIsOpen
    }
}

export default connect(mapStateToProps)(SearchResult);