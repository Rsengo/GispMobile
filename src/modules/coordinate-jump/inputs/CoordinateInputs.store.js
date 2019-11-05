const _degreeToMetric = ({ degree, minute, second }) => 
    degree + minute / 60 + second / 3600;

export const ActionTypes = {
    CHANGE_DEGREE_COORDINATE: 'local/CHANGE_DEGREE_COORDINATE',
};

export const initialState = {
    latitude: {
        degree: 0,
        minute: 0,
        second: 0
    },
    longitude: {
        degree: 0,
        minute: 0,
        second: 0
    }
};

export const actions = {
    changeDegreeCoordinate: (val) => (dispatch, getState) => {
        const state = getState();
        const coordinate = { ...state, [valueProp]: +val };
        const { latitude, longitude } = coordinate;

        const payload = {
            latitude: _degreeToMetric(latitude),
            longitude: _degreeToMetric(longitude)
        };

        dispatch({ type: ActionTypes.CHANGE_DEGREE_COORDINATE, payload });
    }
};

export const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.CHANGE_DEGREE_COORDINATE:
            return { ...state, ...payload };
        
        default:
            return { ...state }
    }
};