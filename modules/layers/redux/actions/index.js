import { layerTreeService } from '../../../../services';

const ActionTypes = {
    LAYER_ACTIVATE: 'layers/LAYER_ACTIVATE',
    INIT: 'layers/INIT'
};

const init = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.INIT, payload: data })
}

const activateLayer = (layerId, isActive) => (dispatch, getState) => {
    const state = getState();
    const { listSublayers, layersTree } = state.root;
    
    const updateLayersTree = layerTreeService.activateNode(
        [ ...layersTree ], 
        layerId,
        isActive
    ).sort();
    
    const listSublayerIds = layerTreeService.getListSublayerIds(layersTree, layerId);

    const listSublayersForUpdate = listSublayers.filter(x => listSublayerIds.includes(x.Id));
    const immutableListSublayers = listSublayers.filter(x => !listSublayerIds.includes(x.Id));

    const updatedListSublayers = listSublayersForUpdate.map(x => ({
        ...x,
        isActive
    }));

    const payload = { 
        listSublayers: [ 
            ...updatedListSublayers, 
            ...immutableListSublayers 
        ],
        layersTree: updateLayersTree
    };
    dispatch({ type: ActionTypes.LAYER_ACTIVATE, payload });
}

export {
    ActionTypes,
    activateLayer,
    init
};