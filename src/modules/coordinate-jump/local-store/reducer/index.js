import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.CHANGE_SELECTOR_VISIBILITY:
            return { ...state, selectorVisible: payload };
        
        case ActionTypes.CHANGE_SELECTED_CRS:
            return { ...state, selectedCRS: payload, selectorVisible: false };

        case ActionTypes.CHANGE_COORDINATE:
            return { ...state, coordinate: payload};

        default:
            return { ...state }
    }
}

export default reducer;