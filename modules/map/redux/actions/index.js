import WKT from 'terraformer-wkt-parser';

const ActionTypes = {
    CHANGE_MAP_TYPE: 'map/CHANGE_MAP_TYPE',
    SEARCH_SUCCESS: 'map/SEARCH_SUCCESS',
    SEARCH_ERROR: 'map/SEARCH_ERROR',
    HIGHLIGHT_GEOMETRY: 'map/HIGHLIGHT_GEOMETRY'
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
};

const highlightGeometry = (wkt) => (dispatch) => { 
    console.log('wkt: ', wkt);

    if (!wkt) {
        dispatch({ type: ActionTypes.HIGHLIGHT_GEOMETRY, payload: null });
        return;
    }

    const geom = WKT.parse(wkt);
    const { type, coordinates } = geom;
    const geoJson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type,
                    coordinates
                }
            }
        ]
    };

    dispatch({ type: ActionTypes.HIGHLIGHT_GEOMETRY, payload: geoJson })
}; 

export {
    ActionTypes,
    changeMapType,
    searchOnMap,
    highlightGeometry
};