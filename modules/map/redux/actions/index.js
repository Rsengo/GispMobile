const ActionTypes = {
    CHANGE_MAP_TYPE: 'map/CHANGE_MAP_TYPE',
    SEARCH_SUCCESS: 'map/SEARCH_SUCCESS',
    SEARCH_ERROR: 'map/SEARCH_ERROR'
};

const changeMapType = (type) => (dispatch) => {
    dispatch({ type: ActionTypes.CHANGE_MAP_TYPE, payload: type });
};

const searchOnMap = (coordinate) => async (dispatch, _, extra) => {
    const { api } = extra;
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
    searchOnMap
};