import React from 'react';
import { connect } from 'react-redux';
import { AttributesDialog } from '../dialog';
import { SearchResultCarousel } from '../carousel'
import { bindActionCreators } from 'redux';
import { actions as searchActions } from '../store';
import { actions as mapActions } from '../../map';
import { hideIfNoData } from '../../../hoc';
import { compose } from 'recompose';

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
        const { searchData, highlightGeometry } = this.props;
        return (
            <React.Fragment>
                <SearchResultCarousel 
                    data={searchData} 
                    highlightGeometry={highlightGeometry}
                    openDialog={this.openDialog}
                />
                <AttributesDialog 
                    isVisible={dialogOpened} 
                    onClose={this.closeDialog}
                    attributes={attrs} 
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ controls, search }) => {
    const { searchResultsIsOpened } = controls;
    const { searchData } = search;

    return {
        searchResultsIsOpened,
        searchData
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...searchActions, 
        ...mapActions
    };

    return bindActionCreators(actions, dispatch);
}

const hasNoData = ({ searchResultsIsOpened }) => !searchResultsIsOpened;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    hideIfNoData(hasNoData)
)(SearchResult);