import { useReducer } from 'react';
import { bindActionCreators } from 'redux';

const useActions = (reducer, initialState, init = (a) => a, actionCreators) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getState = () => state;

    const thunkDispatch = (action) => {
        if (typeof(action) === 'function') {
            action(dispatch, getState);
        }
        else {
            dispatch(action);
        }
    }

    const actions = bindActionCreators(actionCreators, thunkDispatch);

    return [state, actions];
}

export default useActions;