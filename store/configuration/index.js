import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';
  import thunk from 'redux-thunk';

import { reducer as rootReducer } from '../../modules/root';
import { reducer as mapReducer } from '../../modules/map';
import { reducer as controlsReducer } from '../../modules/map-controls';

const createReducer = () => combineReducers({
  root: rootReducer,
  map: mapReducer,
  controls: controlsReducer
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