import React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from './SearchResultCarousel.styles';
import Item from '../dialog/AttributesDialog.Item';

const SearchResultCarousel = ({ data, highlightGeometry }) => (
    <View style={styles.container}>
        <Carousel
            data={data}
            renderItem={({item}) => <Item item={item} openDialog={this.openDialog} />}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={300}
            lockScrollWhileSnapping={true}
            onSnapToItem={(slideIndex) => {
                highlightGeometry(data[slideIndex].geometry);
            }}
        />
    </View>
);

export default SearchResultCarousel;