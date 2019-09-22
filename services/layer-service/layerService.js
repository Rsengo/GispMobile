const CHILDREN_PROP_NAMES = ['sublayers', 'children'];
const LAYER_ID_PROP_NAME = 'layerId';

const _getLayerListSublayers = (layer, setLayerId) => {
    const { Id: layerId } = layer;

    var sublayers = _getListLayers(layer);
    
    if (!setLayerId) {
        return sublayers;
    }
    
    return sublayers.map(x => ({...x, layerId}));
};

const _getListLayers = (layer) => {
    const childPropName = _getChldrenPropName(layer);
    const children = layer[childPropName];

    if (!children || !children.length) {
        return [layer];
    }

    return children.map(x => _getListLayers(x)).flat();
};

const _getChldrenPropName = (layer) => {
    return Object.keys(layer).find(x => CHILDREN_PROP_NAMES.includes(x));
};

const getListSublayers = (layers, setLayerId=false) => {
    return layers.map(x => _getLayerListSublayers(x, setLayerId)).flat();
};

const getActive = (layers) => {
    return layers.filter(x => x.isActive);
}

const groupByTopLayer = (listSublayers) => {
    const groupObj = listSublayers.reduce((rv, x) => {
        const val = x[key];
        const layerProp = rv[val] || {
            layerId: val,
            sublayers: []
        };
        const { sublayers } = layerProp;
        sublayers.push(x);
        return rv;
    }, {});

    return Object.values(groupObj);
};

export {
    getListSublayers,
    getActive,
    groupByTopLayer
};