import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.INIT:
            return { ...state, ...payload };

        default:
            return { ...state };
    }
};

export default reducer;