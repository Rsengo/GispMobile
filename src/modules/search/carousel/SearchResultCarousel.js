import React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from './SearchResultCarousel.styles';
import SearchResultCarouselItem from './SearchResultCarousel.Item';
import { hideIfNoData } from '../../../hoc';

const SearchResultCarousel = ({ data, highlightGeometry, openDialog }) => {
    const openDialogCallback = React.useCallback(openDialog, []);
    const highlightGeometryCallback = React.useCallback(highlightGeometry, []);

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={({item}) => <SearchResultCarouselItem openDialog={openDialogCallback} {...item} />}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={300}
                lockScrollWhileSnapping={true}
                onSnapToItem={(slideIndex) => {
                    highlightGeometryCallback(data[slideIndex].geometry);
                }}
            />
        </View>
    )
};

export default hideIfNoData(({data}) => (
    !data || !data.length
))(SearchResultCarousel);