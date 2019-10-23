import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.SEARCH_SUCCESS:
            return { ...state, searchData: payload };

        //TODO: expection on error

        default:
            return { ...state };
    }
};

export default reducer;