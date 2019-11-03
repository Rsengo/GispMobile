import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.OPEN_LAYERS_TREE_DIALOG:
            return { ...state, layersTreeDialogIsOpened: payload };

        case ActionTypes.OPEN_MAP_TYPE_DIALOG:
            return { ...state, mapTypeDialogIsOpened: payload };

        case ActionTypes.OPEN_SEARCH_RESULTS:
            return { ...state, searchResultsIsOpened: payload };

        case ActionTypes.OPEN_COORDINATE_TRANSITION_DIALOG:
            return { ...state, coordinateJumpDialogIsOpened: payload }

        default:
            return { ...state };
    }
};

export default reducer;