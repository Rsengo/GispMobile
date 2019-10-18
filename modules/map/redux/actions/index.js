import { BASE_CRS, WKT_CRS } from '../../../../constants';
import { geometryService } from '../../../../services'; 

const ActionTypes = {
    CHANGE_MAP_TYPE: 'map/CHANGE_MAP_TYPE',
    SEARCH_SUCCESS: 'map/SEARCH_SUCCESS',
    SEARCH_ERROR: 'map/SEARCH_ERROR',
    HIGHLIGHT_GEOMETRY: 'map/HIGHLIGHT_GEOMETRY',
    CHANGE_REGION: 'map/CHANGE_REGION'
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
    if (!wkt) {
        dispatch({ type: ActionTypes.HIGHLIGHT_GEOMETRY, payload: null });
        return;
    }

    const geom = geometryService.parseWKT(wkt);
    const { type, coordinates } = geom;

    console.log('ccc: ' + JSON.stringify(coordinates))

    const bbox = geometryService.projectBbox(WKT_CRS, BASE_CRS, geom.bbox());
    const region = geometryService.mapBboxToRegion(bbox, true);

    dispatch({ type: ActionTypes.CHANGE_REGION, payload: region });

    const geoJson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type,
                    coordinates: geometryService.projectCoordinates(WKT_CRS, BASE_CRS, coordinates)
                }
            }
        ]
    };

    dispatch({ type: ActionTypes.HIGHLIGHT_GEOMETRY, payload: geoJson })
}; 

const changeRegion = (region) => (dispatch) => {
    if (!region) {
        return;
    }

    if (typeof(region) === 'object') {
        dispatch({ type: ActionTypes.CHANGE_REGION, payload: region });
        return;        
    }

    const geom = geometryService.parseWKT(region);
    const bbox  = geom.bbox();
    const projectBbox = geometryService.projectBbox(WKT_CRS, BASE_CRS, bbox);
    const projectRegion = geometryService.mapBboxToRegion(projectBbox, false);

    dispatch({ type: ActionTypes.CHANGE_REGION, payload: projectRegion });
}

const coordinateTransition = (coordinate, spatialReference) => (dispatch) => {
    console.log('coord: ' + JSON.stringify(coordinate))
    const { definition } = spatialReference;
    const { longitude, latitude } = coordinate;

    const projectCoordinate = geometryService.projectCoordinates(
        definition, 
        BASE_CRS, 
        [longitude, latitude ]);

    const geoJson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: projectCoordinate
                }
            }
        ]
    };

    dispatch({ type: ActionTypes.HIGHLIGHT_GEOMETRY, payload: geoJson })

    const bbox = [...projectCoordinate, ...projectCoordinate];
    const region = geometryService.mapBboxToRegion(bbox, true);

    dispatch({ type: ActionTypes.CHANGE_REGION, payload: region });
}

export {
    ActionTypes,
    changeMapType,
    searchOnMap,
    highlightGeometry,
    changeRegion,
    coordinateTransition
};