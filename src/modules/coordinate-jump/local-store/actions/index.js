export const ActionTypes = {
    CHANGE_SELECTOR_VISIBILITY: 'local/CHANGE_SELECTOR_VISIBILITY',
    CHANGE_SELECTED_CRS: 'local/CHANGE_SELECTED_CRS',
    CHANGE_COORDINATE: 'local/CHANGE_COORDINATE',
};

export const changeSelectorVisibility = (val) => ({
    type: ActionTypes.CHANGE_SELECTOR_VISIBILITY,
    payload: val
});

export const changeSelectedCrs = (crs) => ({
    type: ActionTypes.CHANGE_SELECTED_CRS,
    payload: crs
});

export const changeCoordinate = (coord) => ({
    type: ActionTypes.CHANGE_COORDINATE,
    payload: coord
});