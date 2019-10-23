import { BASE_CRS, WKT_CRS } from '../../../../constants';
import { geometryService } from '../../../../services'; 

const ActionTypes = {
    HIGHLIGHT_GEOMETRY: 'map/HIGHLIGHT_GEOMETRY',
    CHANGE_MAP_TYPE: 'map-types/CHANGE_MAP_TYPE',
    CHANGE_REGION: 'map/CHANGE_REGION'
};

const changeMapType = (type) => (dispatch) => {
    dispatch({ type: ActionTypes.CHANGE_MAP_TYPE, payload: type });
};

const highlightGeometry = (wkt) => (dispatch) => { 
    if (!wkt) {
        dispatch({ type: ActionTypes.HIGHLIGHT_GEOMETRY, payload: null });
        return;
    }

    const geom = geometryService.parseWKT(wkt);
    const { type, coordinates } = geom;

    const bbox = geometryService.projectBbox(WKT_CRS, BASE_CRS, geom.bbox());
    const region = geometryService.mapBboxToRegion(bbox, true);

    dispatch({ type: ActionTypes.CHANGE_REGION, payload: region });

    const geoJson = geometryService.createGeoJson({
        type,
        coordinates: geometryService.projectCoordinates(WKT_CRS, BASE_CRS, coordinates)
    });

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
    const { definition } = spatialReference;
    const { longitude, latitude } = coordinate;

    const projectCoordinate = geometryService.projectCoordinates(
        definition, 
        BASE_CRS, 
        [longitude, latitude ]);

    const geoJson = geometryService.createGeoJson({
        type: 'Point',
        coordinates: projectCoordinate
    });

    dispatch({ type: ActionTypes.HIGHLIGHT_GEOMETRY, payload: geoJson })

    const bbox = [...projectCoordinate, ...projectCoordinate];
    const region = geometryService.mapBboxToRegion(bbox, true);

    dispatch({ type: ActionTypes.CHANGE_REGION, payload: region });
}

export {
    ActionTypes,
    changeMapType,
    highlightGeometry,
    changeRegion,
    coordinateTransition
};