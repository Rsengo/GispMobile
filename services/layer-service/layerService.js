const _childrenPropNames = ['sublayers', 'children'];

const _getLayerListSublayers = (layer, setLayerId) => {
    const { Id: layerId } = layer;

    var sublayers = _getListLayers(layer);
    
    if (!setLayerId) {
        return sublayers;
    }
    
    return sublayers.map(x => ({...x, layerId}));
}

const _getListLayers = (layer) => {
    const childPropName = _getChldrenPropName(layer);
    const children = layer[childPropName];

    if (!children || !children.length) {
        return [layer];
    }

    return children.map(x => _getListLayers(x)).flat();
}

const _getChldrenPropName = (layer) => {
    return Object.keys(layer).find(x => _childrenPropNames.includes(x));
}

const getListSublayers = (layers, setLayerId = false) => {
    return layers.map(x => _getLayerListSublayers(x, setLayerId)).flat();
}

const layerService = {
    getListSublayers
}

export { layerService }