const ActionTypes = {
    CHANGE_MAP_TYPE: 'map/CHANGE_MAP_TYPE',
    SEARCH_SUCCESS: 'map/SEARCH_SUCCESS',
    SEARCH_ERROR: 'map/SEARCH_ERROR'
};

const changeMapType = (type) => (dispatch) => {
    dispatch({ type: ActionTypes.CHANGE_MAP_TYPE, payload: type });
};

const search = (coordinate) => (dispatch, _, { api }) => {

    const { success, data: payload, errorMessage } = await api.map.search(coordinate);

    if (success) {
        dispatch({ type: ActionTypes.SEARCH_SUCCESS, payload });
    } else {
        dispatch({ type: ActionTypes.SEARCH_ERROR, payload: errorMessage });
    }
}

export {
    ActionTypes,
    changeMapType,
    search
};