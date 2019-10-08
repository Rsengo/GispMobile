const ActionTypes = {
    OPEN_LAYERS_TREE_DIALOG: 'controls/OPEN_LAYERS_TREE',
    OPEN_MAP_TYPE_DIALOG: 'controls/OPEN_MAP_TYPE_DIALOG',
    OPEN_SEARCH_RESULTS: 'controls/OPEN_SEARCH_RESULTS'
};

const openLayersTreeDialog = (val) => (dispatch) => {
    dispatch({ type: ActionTypes.OPEN_LAYERS_TREE_DIALOG, payload: val });
};

const openMapTypeDialog = (val) => (dispatch) => {
    dispatch({ type: ActionTypes.OPEN_MAP_TYPE_DIALOG, payload: val });
};

const openSearchResults = (val) => (dispatch) => {
    dispatch({ type: ActionTypes.OPEN_SEARCH_RESULTS, payload: val });
};

export {
    ActionTypes,
    openLayersTreeDialog,
    openMapTypeDialog,
    openSearchResults
};