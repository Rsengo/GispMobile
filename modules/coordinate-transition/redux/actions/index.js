const ActionTypes = {
    INIT: 'coordinate-transition/INIT'
};

const init = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.INIT, payload: data });
};

export {
    ActionTypes,
    init 
};