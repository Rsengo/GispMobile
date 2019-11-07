import React from 'react';
import { connect } from 'react-redux';
import { AttributesDialog } from '../dialog';
import { SearchResultCarousel } from '../carousel'
import { bindActionCreators } from 'redux';
import { actions as searchActions } from '../store';
import { actions as mapActions } from '../../map';
import { hideIfNoData } from '../../../hoc';
import { compose } from 'recompose';

const SearchResult = ({ 
    searchData, 
    highlightGeometry 
}) => {
    const [state, setState] = React.useState({
        dialogOpened: false, 
        attrs: {},
        displayName: null
    });

    const hightlightFirstItem = React.useCallback(() => {
        if (!searchData || !searchData.length) {
            return;
        }

        highlightGeometry(searchData[0].geometry);
    }, [searchData]);

    React.useEffect(() => {
        hightlightFirstItem();
        return () => highlightGeometry(null);
    }, [searchData]);

    const openDialog = (attrs, displayName) => setState({ 
        ...state, 
        dialogOpened: true, 
        attrs,
        displayName
    });

    const closeDialog = () => setState({ 
        ...state, 
        dialogOpened: false 
    });

    const { dialogOpened, attrs, displayName } = state;
    
    return (
        <React.Fragment>
            <SearchResultCarousel 
                data={searchData} 
                highlightGeometry={highlightGeometry}
                openDialog={openDialog}
            />
            <AttributesDialog 
                isVisible={dialogOpened} 
                onClose={closeDialog}
                attributes={attrs}
                displayName={displayName} 
            />
        </React.Fragment>
    );
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

const hasNoData = ({ searchResultsIsOpened, searchData }) => 
    !searchResultsIsOpened || 
    !searchData || 
    !searchData.length;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    hideIfNoData(hasNoData)
)(SearchResult);