const ActionTypes = {
    MAP_MANIFEST_LOAD_SUCCESS: 'app/MAP_MANIFEST_LOAD_SUCCESS',
    MAP_MANIFEST_LOAD_ERROR: 'app/MAP_MANIFEST_LOAD_ERROR',
    MAP_MANIFEST_LOAD_PROCESSING: 'app/MAP_MANIFEST_LOAD_PROCESSING'
}

const loadMapManifest = () => async (dispatch, _, extra) => {
    dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_PROCESSING, payload: true });

    const { api } = extra;
    const { success, data, errorMessage } = await api.map.getMapManifest();

    dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_PROCESSING, payload: false });

    if (success) {
        dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_SUCCESS, payload: data });
    } else {
        dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_ERROR, payload: errorMessage });
    }
};

export { 
    ActionTypes, 
    loadMapManifest
};