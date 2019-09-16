import { ActionTypes } from '../actions';
import { layerService } from '../../../../services';

const reducer = (state={}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.MAP_MANIFEST_LOAD_PROCESSING:
            return { ...state, mapManifestLoadingProcessing: payload };
        
        case ActionTypes.MAP_MANIFEST_LOAD_SUCCESS:
            const { layers } = payload; 
            const listLayers = layerService.getListSublayers(...layers, true);
            return { ...state, ...payload, listLayers, error: false };

        case ActionTypes.MAP_MANIFEST_LOAD_ERROR:
            return { ...state, error: true, errorMessage: payload };
    }
}

export default reducer;