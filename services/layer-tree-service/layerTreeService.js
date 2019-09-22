import { LayerTreeItemTypes } from '../../constants';
import { getListSublayers } from '../layer-service/layerService';

const CHILD_PROP_NAME = 'children';

const _getNode = (layersTree, layerId) => {
    const flatTree = getFlatTree(layersTree);
    return flatTree.find(x => x.Id === layerId);
}

const _activateNode = (node, isActive) => {
    node.selected = isActive;
    
    const children = node[CHILD_PROP_NAME];

    if (!children || !children.length) {
        return;
    }

    children.forEach(x => {
        if (x.type === LayerTreeItemTypes.LEGEND) {
            return;
        }

        _activateNode(x, isActive);
    });
}

const getFlatTree = (layersTree) => {
    const layers = layersTree.filter(x => x.type !== LayerTreeItemTypes.LEGEND);
    const arr = [ ...layers ];

    const childrenLayers = layersTree.map(layer => {
        const children = layer[CHILD_PROP_NAME];
        const hasChildren = children && children.length;

        if (!hasChildren) {
            return [];
        }

        return getFlatTree(children);
    }).flat();

    return arr.concat(childrenLayers);
};

const activateNode = (layersTree, layerId, isActive) => {
    const node = _getNode(layersTree, layerId);
    _activateNode(node, isActive);
    
    return layersTree;
}

const getListSublayerIds = (layersTree, layerId) => {
    const flatTree = getFlatTree(layersTree);
    const node = flatTree.find(x => x.Id === layerId);
    return getListSublayers([node]).map(x => x.Id);
}

export {
    getFlatTree,
    activateNode,
    getListSublayerIds
};