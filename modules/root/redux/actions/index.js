import { layerService } from '../../../../services';

const ActionTypes = {
    MAP_MANIFEST_LOAD_SUCCESS: 'app/MAP_MANIFEST_LOAD_SUCCESS',
    MAP_MANIFEST_LOAD_ERROR: 'app/MAP_MANIFEST_LOAD_ERROR',
    MAP_MANIFEST_LOAD_PROCESSING: 'app/MAP_MANIFEST_LOAD_PROCESSING',
    LIST_LAYER_ACTIVATE: 'app/LIST_LAYER_ACTIVATE'
}

const loadMapManifest = () => async (dispatch, _, extra) => {
    dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_PROCESSING, payload: true });

    const { api } = extra;
    const { success, data, errorMessage } = await api.map.getMapManifest();

    dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_PROCESSING, payload: false });

    if (success) {
        const { layers } = data;
        const listSublayers = layerService.getListSublayers([...layers], true);
        const payload = { ...data, listSublayers }
        dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_SUCCESS, payload: payload });
    } else {
        dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_ERROR, payload: errorMessage });
    }
};

const activateListLayer = (id, isActive) => async (dispatch, getState) => {
    const state = getState();
    const { listSublayers } = state;
    const layer = listSublayers.find(x => x.id === id);
    const updatedLayer = { ...layer, isActive };
    const otherLayers = listSublayers.filter(x => x.id !== id);
    const payload = [ ...otherLayers, updatedLayer ];

    dispatch({ type: ActionTypes.LIST_LAYER_ACTIVATE, payload });
}

export { 
    ActionTypes, 
    loadMapManifest
};