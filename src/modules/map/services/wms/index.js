import { PROXY_URL } from '../../../../../constants'

const SERVICE = 'WMS';
const VERSION = '1.3.0';
const REQUEST = 'GetMap';
const FORMAT = 'image/png';
const TRANSPARENT = true;
const CRS = 'EPSG:3857'; 
const STYLES = '';
const FORMAT_OPTIONS = 'dpi:72'; 

export const getWmsLayerUrl = (layerId, sublayers) => {
    const layerNames = sublayers.map(x => x.name).join();
    return `${PROXY_URL}/${layerId}` +
        `?SERVICE=${SERVICE}` +
        `&VERSION=${VERSION}` +
        `&REQUEST=${REQUEST}` +
        `&FORMAT=${FORMAT}` +
        `&TRANSPARENT=${TRANSPARENT}` +
        `&LAYERS=${layerNames}` +
        `&CRS=${CRS}` +
        `&STYLES=${STYLES}` +
        `&FORMAT_OPTIONS=${FORMAT_OPTIONS}` +
        '&WIDTH={width}' +
        '&HEIGHT={height}' +
        '&BBOX={minX},{minY},{maxX},{maxY}';
};