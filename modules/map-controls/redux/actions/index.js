const ActionTypes = {
    OPEN_LAYERS_TREE_DIALOG: 'controls/OPEN_LAYERS_TREE',
    OPEN_MAP_TYPE_DIALOG: 'controls/OPEN_MAP_TYPE_DIALOG'
};

const openLayersTreeDialog = (val) => (dispatch) => {
    dispatch({ type: OPEN_LAYERS_TREE_DIALOG, payload: val });
};

const openMapTypeDialog = (val) => (dispatch) => {
    dispatch({ type: OPEN_MAP_TYPE_DIALOG, payload: val });
};

export {
    ActionTypes,
    openLayersTreeDialog,
    openMapTypeDialog
};