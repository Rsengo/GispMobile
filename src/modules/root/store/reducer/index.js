import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.MAP_MANIFEST_LOAD_PROCESSING:
            return { ...state, mapManifestLoadingProcessing: payload };
        
        case ActionTypes.MAP_MANIFEST_LOAD_SUCCESS:
            return { ...state, error: false };

        case ActionTypes.MAP_MANIFEST_LOAD_ERROR:
            return { ...state, error: true, errorMessage: payload };

        default:
            return { ...state };
    }
};

export default reducer;