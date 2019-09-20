import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.MAP_MANIFEST_LOAD_PROCESSING:
            return { ...state, mapManifestLoadingProcessing: payload };
        
        case ActionTypes.MAP_MANIFEST_LOAD_SUCCESS:
            return { ...state, ...payload, error: false };

        case ActionTypes.MAP_MANIFEST_LOAD_ERROR:
            return { ...state, error: true, errorMessage: payload };

        case ActionTypes.LIST_LAYER_ACTIVATE:
            return { ...state, listSublayers: payload }

        default:
            return { ...state };
    }
}

export default reducer;