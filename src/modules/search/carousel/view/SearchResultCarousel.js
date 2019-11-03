import React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from './SearchResultCarousel.styles';
import Item from './SearchResultCarousel.Item';

const SearchResultCarousel = ({ data, highlightGeometry, openDialog }) => {
    React.useEffect(() => {
        if (data && data.length) {
            highlightGeometry(data[0].geometry);
        }

        return () => highlightGeometry(null);
    });

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={({item}) => <Item openDialog={openDialog} {...item} />}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={300}
                lockScrollWhileSnapping={true}
                onSnapToItem={(slideIndex) => {
                    highlightGeometry(data[slideIndex].geometry);
                }}
            />
        </View>
    )
};

export default SearchResultCarousel;