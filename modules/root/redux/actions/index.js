import { layerService, layerTreeService } from '../../../../services';

const ActionTypes = {
    MAP_MANIFEST_LOAD_SUCCESS: 'app/MAP_MANIFEST_LOAD_SUCCESS',
    MAP_MANIFEST_LOAD_ERROR: 'app/MAP_MANIFEST_LOAD_ERROR',
    MAP_MANIFEST_LOAD_PROCESSING: 'app/MAP_MANIFEST_LOAD_PROCESSING',
    LAYER_ACTIVATE: 'app/LAYER_ACTIVATE'
}

const loadMapManifest = () => async (dispatch, _, extra) => {
    dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_PROCESSING, payload: true });

    const { api } = extra;
    const { success, data, errorMessage } = await api.map.getMapManifest();

    dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_PROCESSING, payload: false });

    if (success) {
        const { layers, layersTree } = data;
        const listSublayers = layerService.getListSublayers(layers, true);
        const payload = { 
            ...data, 
            listSublayers, 
            layersTree 
        };
        dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_SUCCESS, payload });
    } else {
        dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_ERROR, payload: errorMessage });
    }
};

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
    loadMapManifest,
    activateLayer
};