import { LayerTreeItemTypes } from '../../../constants';

const CHILDREN_PROP_NAMES = ['sublayers', 'children'];

const _getLayerListSublayers = (layer, setLayerId) => {
    const { Id: layerId, layerOrder } = layer;

    var sublayers = _getListLayers(layer);
    
    if (!setLayerId) {
        return sublayers;
    }
    
    return sublayers.map(x => ({...x, layerId, layerOrder}));
};

const _getListLayers = (layer) => {
    const childPropName = _getChldrenPropName(layer);
    const children = layer[childPropName];

    if (!children || !children.length) {
        return [layer];
    }

    const filteredChildren = children.filter(x => x.type !== LayerTreeItemTypes.LEGEND);

    if (!filteredChildren || !filteredChildren.length) {
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
        const { layerId, layerOrder } = x;
        const layerProp = rv[layerId] || {
            layerId,
            layerOrder,
            sublayers: []
        };
        const { sublayers } = layerProp;
        sublayers.push(x);
        rv[layerId] = layerProp;
        return rv;
    }, {});

    return Object.values(groupObj);
};

export {
    getListSublayers,
    getActive,
    groupByTopLayer
};