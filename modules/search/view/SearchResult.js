import React from 'react';
import { connect } from 'react-redux';
import AttributesDialog from './dialog/AttributesDialog';
import SearchResultCarousel from './carousel/SearchResultCarousel'
import { bindActionCreators } from 'redux';
import { actions as mapActions } from '../../map';

class SearchResult extends React.Component {
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
        const { searchResultsIsOpened, searchData, highlightGeometry } = this.props;
        return (
            searchResultsIsOpened 
            ? ( 
                <React.Fragment>
                    <SearchResultCarousel 
                        data={searchData} 
                        highlightGeometry={highlightGeometry} />
                    <AttributesDialog 
                        isVisible={dialogOpened} 
                        onClose={this.closeDialog}
                        attributes={attrs} 
                    />
                </React.Fragment>
            ) 
            : null
        );
    }
}

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