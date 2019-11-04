import { LayerTreeItemTypes } from '../../../constants';
import { getListSublayers } from './layerService';

const _getNode = (layersTree, layerId) => {
    const flatTree = getFlatTree(layersTree);
    return flatTree.find(x => x.Id === layerId);
}

const _getParentNode = (layersTree, layerId) => {
    const flatTree = getFlatTree(layersTree);
    return flatTree.find(({ children }) => {
        if (!children || !children.length) {
            return false;
        }

        return children.some(y => y.Id == layerId);
    });
}

const _activateNode = (node, isActive) => {
    node.selected = isActive;
    
    const { children } = node;

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
        const children = layer.children;
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
    const parentNode = _getParentNode(layersTree, layerId);

    if (!parentNode) {
        _activateNode(node, isActive);
        return layersTree;
    }

    const { children: sublings } = parentNode;

    if (!sublings || !sublings.length) {
        _activateNode(node, isActive);
        return layersTree;
    }

    const allSublingsIsActive = sublings.every(x => 
        x.selected === isActive || 
        x.Id === layerId);

    if (!allSublingsIsActive) {
        _activateNode(node, isActive);
        return layersTree;
    }

    return activateNode(layersTree, parentNode.Id, isActive);
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