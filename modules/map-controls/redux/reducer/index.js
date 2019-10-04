import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.OPEN_LAYERS_TREE_DIALOG:
            return { ...state, layersTreeDialogIsOpened: payload };

        case ActionTypes.OPEN_MAP_TYPE_DIALOG:
            return { ...state, mapTypeDialogIsOpened: payload };

        default:
            return { ...state };
    }
};

export default reducer;