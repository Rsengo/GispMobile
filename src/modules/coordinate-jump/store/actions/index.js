const ActionTypes = {
    INIT: 'coordinate-jump/INIT'
};

const init = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.INIT, payload: data });
};

export {
    ActionTypes,
    init 
};