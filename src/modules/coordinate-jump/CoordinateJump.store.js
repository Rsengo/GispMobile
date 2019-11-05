export const ActionTypes = {
    CHANGE_SELECTOR_VISIBILITY: 'local/CHANGE_SELECTOR_VISIBILITY',
    CHANGE_SELECTED_CRS: 'local/CHANGE_SELECTED_CRS',
    CHANGE_COORDINATE: 'local/CHANGE_COORDINATE',
}

export const initialState = {
    selectorVisible: false,
    selectedCRS: null,
    coordinate: {
        latitude: 0,
        longitude: 0
    }
};

export const actions = {
    changeSelectorVisibility: (val) => ({
        type: ActionTypes.CHANGE_SELECTOR_VISIBILITY,
        payload: val
    }),

    changeSelectedCrs: (crs) => ({
        type: ActionTypes.CHANGE_SELECTED_CRS,
        payload: crs
    }),

    changeCoordinate: (coord) => ({
        type: ActionTypes.CHANGE_COORDINATE,
        payload: coord
    }),

    changeCoordinate: (coord) => ({
        type: ActionTypes.CHANGE_COORDINATE,
        payload: coord
    })
}

export const reducer = (state=initialState, action) => {
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
};