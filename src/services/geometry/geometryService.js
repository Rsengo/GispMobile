import proj4 from 'proj4';
import WKT from 'terraformer-wkt-parser';

const DEFAULT_DELTA = 0.05;
const DELTA_COEF = 3;

const _transformDeltas = (deltas) => {
    const { longitudeDelta, latitudeDelta } = deltas;

    const longitudeDeltaTransformed = longitudeDelta == 0 
        ? DEFAULT_DELTA 
        : longitudeDelta * DELTA_COEF;
    const latitudeDeltaTransformed = latitudeDelta == 0 
        ? DEFAULT_DELTA 
        : latitudeDelta * DELTA_COEF;

    return {
        longitudeDelta: longitudeDeltaTransformed,
        latitudeDelta: latitudeDeltaTransformed
    }
};

const projectCoordinates = (fromCrs, toCrs, coordinates) => {
    var firstChild = coordinates[0];

    if (!Array.isArray(firstChild)) {
        return proj4(toCrs, fromCrs, coordinates);
    }

    return coordinates.map(x => projectCoordinates(fromCrs, toCrs, x));
};

const projectBbox = (fromCrs, toCrs, bbox) => {
    const [minPointX, minPointY, maxPointX, maxPointY] = bbox;
    const minPoint = [minPointX, minPointY];
    const maxPoint = [maxPointX, maxPointY];
    const minPointProj = projectCoordinates(fromCrs, toCrs, minPoint);
    const maxPointProj = projectCoordinates(fromCrs, toCrs, maxPoint);

    return [...minPointProj, ...maxPointProj];
};

const mapBboxToRegion = (bbox, useTransformations) => {
    const [
        longitudeMin, 
        latitudeMin, 
        longitudeMax, 
        latitudeMax
    ] = bbox;

    const deltas = {
        longitudeDelta: (longitudeMax - longitudeMin),
        latitudeDelta: (latitudeMax - latitudeMin)
    }

    const transformedDeltas = useTransformations 
        ? _transformDeltas(deltas) 
        : deltas;

    const longitude = (longitudeMax + longitudeMin) / 2;
    const latitude = (latitudeMax + latitudeMin) / 2;
    
    return {
        longitude,
        latitude,
        ...transformedDeltas
    };
};

const parseWKT = (wkt) => WKT.parse(wkt);

const createGeoJson = (geometry) => {
    return {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry
            }
        ]
    };
};

export {
    projectCoordinates,
    projectBbox,
    mapBboxToRegion,
    parseWKT,
    createGeoJson
}