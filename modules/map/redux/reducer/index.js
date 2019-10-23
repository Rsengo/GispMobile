import { ActionTypes } from '../actions';
import initialState from '../initial';

const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.HIGHLIGHT_GEOMETRY:
            return { ...state, geoJson: payload };

        case ActionTypes.CHANGE_REGION:
            return { ...state, region: payload };

            case ActionTypes.CHANGE_MAP_TYPE:
                return { ...state, mapType: payload };

        default:
            return { ...state };
    }
};

export default reducer;