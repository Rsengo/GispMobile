import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.INIT:
            return { ...state, ...payload };

        case ActionTypes.LAYER_ACTIVATE:
            const { listSublayers, layersTree } = payload;
            return { ...state, listSublayers, layersTree };

        default:
            return { ...state };
    }
};

export default reducer;