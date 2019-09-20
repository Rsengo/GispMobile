import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';
  import thunk from 'redux-thunk';

import { reducer as rootReducer } from '../../modules/root';

const createReducer = () => combineReducers({
  root: rootReducer
});

const configureStore = (extra) => {
    const middlewares = [
      thunk.withExtraArgument(extra),
    ];

    const reducer = createReducer();

    const store = createStore(
        reducer,
        applyMiddleware(...middlewares)
    );

    return store;
}

export { createReducer };
export default configureStore;