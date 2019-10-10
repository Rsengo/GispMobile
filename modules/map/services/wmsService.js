import { PROXY_URL } from '../../../constants'

const SERVICE = 'WMS';
const VERSION = '1.3.0';
const REQUEST = 'GetMap';
const FORMAT = 'image/png';
const TRANSPARENT = true;
const CRS = 'EPSG:3857'; 
// const CRS = 'EPSG:900913'; 
const STYLES = '';
const FORMAT_OPTIONS = 'dpi:72'; 

const getWmsLayerUrl = (layerId, sublayers) => {
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
    // return 'http://tap-vm-tn:90/qgis/qgis_mapserv.fcgi.exe?map=tn/Sitplans_exist_test_Bannikova.qgs&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=true&LAYERS=%D0%A1%D0%BA%D0%B2%D0%B0%D0%B6%D0%B8%D0%BD%D1%8B%20(%D1%82%D0%BE%D1%87%D0%BA%D0%B8),%D0%A1%D0%BA%D0%B2%D0%B0%D0%B6%D0%B8%D0%BD%D1%8B%20(%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D0%BE%D0%BD%D1%8B),%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%81%D0%BD%D0%B0%D0%B1%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5,%D0%94%D0%BE%D0%B1%D1%8B%D1%87%D0%B0%20%D0%B8%20%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B5%D1%84%D1%82%D0%B8%20%D0%B8%20%D0%B3%D0%B0%D0%B7%D0%B0%20(%D1%82%D0%BE%D1%87%D0%BA%D0%B8),%D0%94%D0%BE%D0%B1%D1%8B%D1%87%D0%B0%20%D0%B8%20%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B5%D1%84%D1%82%D0%B8%20%D0%B8%20%D0%B3%D0%B0%D0%B7%D0%B0%20(%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%BA%D0%B8),%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B%20%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BD%D0%B0%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F,%D0%9A%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D1%8B%20%D0%9E%D0%9F%D0%98&CRS=EPSG:3857&STYLES=&FORMAT_OPTIONS=dpi:72&WIDTH=256&HEIGHT=256&BBOX=8472663.457,8459624.919,8919395.151,8703022.885';
};

export {
    getWmsLayerUrl
};