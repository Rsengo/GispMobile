import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './SearchResult.styles';
import { Headline, Paragraph, Caption, Button, Dialog } from 'react-native-paper';
import SearchItemAttributesDialog from './SearchItemAttributesDialog';
import { bindActionCreators } from 'redux';
import { actions as mapActions } from '../../map';

const DEFAULT_ITEM_NAME = 'Без названия';

const SearchResult = ({ searchResultsIsOpened, searchData, highlightGeometry }) => {
    return(
        searchResultsIsOpened 
            ? ( 
                <SearchResultView 
                    data={searchData} 
                    highlightGeometry={highlightGeometry} />
            ) 
            : null
    );
};

class SearchResultView extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            dialogOpened: false, 
            attrs: {} 
        };
    }

    closeDialog = () => this.setState({ 
        ...this.state, 
        dialogOpened: false 
    });

    openDialog = (attrs) => this.setState({ 
        ...this.state, 
        dialogOpened: true, 
        attrs 
    });

    hightlightFirstItem = () => {
        const { data, highlightGeometry } = this.props;

        if (!data || !data.length) {
            return;
        }

        highlightGeometry(data[0].geometry);
    }

    componentDidUpdate() {
        this.hightlightFirstItem();
    }

    componentDidMount() {
        this.hightlightFirstItem();
    }

    componentWillUnmount() {
        const { highlightGeometry } = this.props;
        highlightGeometry(null);
    }

    render() {
        const { dialogOpened, attrs } = this.state;
        const { data, highlightGeometry } = this.props;
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Carousel
                        data={data}
                        renderItem={({item}) => <SearchResultItem item={item} openDialog={this.openDialog} />}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={300}
                        lockScrollWhileSnapping={true}
                        onSnapToItem={(slideIndex) => {
                            console.log(slideIndex);
                            highlightGeometry(data[slideIndex].geometry);
                        }}
                    />
                </View>
                <SearchItemAttributesDialog 
                    isVisible={dialogOpened} 
                    onClose={this.closeDialog}
                    attributes={attrs} 
                />
            </React.Fragment>
        );
    }
}

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
    const { searchResultsIsOpened } = controls;
    const { searchData } = map;

    return {
        searchResultsIsOpened,
        searchData
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...mapActions
    };

    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);