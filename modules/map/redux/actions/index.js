const ActionTypes = {
    CHANGE_MAP_TYPE: 'map/CHANGE_MAP_TYPE',
};

const changeMapType = (type) => (dispatch) => {
    dispatch({ type: CHANGE_MAP_TYPE, payload: type });
};

export {
    ActionTypes,
    changeMapType
};