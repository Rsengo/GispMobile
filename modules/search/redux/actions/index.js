const ActionTypes = {
    SEARCH_SUCCESS: 'search/SEARCH_SUCCESS',
    SEARCH_ERROR: 'search/SEARCH_ERROR',
};

const searchOnMap = (coordinate) => async (dispatch, _, extra) => {
    const { api } = extra;
    const { success, data: payload, errorMessage } = await api.map.search(coordinate);

    if (success) {
        dispatch({ type: ActionTypes.SEARCH_SUCCESS, payload });
    } else {
        dispatch({ type: ActionTypes.SEARCH_ERROR, payload: errorMessage });
    }
};

export {
    ActionTypes,
    searchOnMap
};