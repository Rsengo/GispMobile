import proj4 from 'proj4';

const DEFAULT_DELTA = 0.05;
const DELTA_COEF = 3;

const projectCoordinates = (fromCrs, toCrs, coordinates) => {
    var firstChild = coordinates[0];

    if (!Array.isArray(firstChild)) {
        return proj4(toCrs, fromCrs, coordinates);
    }

    return coordinates.map(x => projectCoordinates(fromCrs, toCrs, x));
}

const projectBbox = (fromCrs, toCrs, bbox) => {
    const [minPointX, minPointY, maxPointX, maxPointY] = bbox;
    const minPoint = [minPointX, minPointY];
    const maxPoint = [maxPointX, maxPointY];
    const minPointProj = projectCoordinates(fromCrs, toCrs, minPoint);
    const maxPointProj = projectCoordinates(fromCrs, toCrs, maxPoint);

    return [...minPointProj, ...maxPointProj];
}

const mapBboxToRegion = (bbox) => {
    const [
        longitudeMin, 
        latitudeMin, 
        longitudeMax, 
        latitudeMax
    ] = bbox;

    let longitudeDelta = (longitudeMax - longitudeMin);
    let latitudeDelta = (latitudeMax - latitudeMin);

    const longitude = (longitudeMax + longitudeMin) / 2;
    const latitude = (latitudeMax + latitudeMin) / 2;

    longitudeDelta = longitudeDelta == 0 
        ? DEFAULT_DELTA 
        : longitudeDelta * DELTA_COEF;
    latitudeDelta = latitudeDelta == 0 
        ? DEFAULT_DELTA 
        : latitudeDelta * DELTA_COEF;
    
    return {
        longitude,
        latitude,
        longitudeDelta,
        latitudeDelta
    };
}

export {
    projectCoordinates,
    projectBbox,
    mapBboxToRegion
}