import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';
  import thunk from 'redux-thunk';

import { reducer as mapManifestReducer } from '../../modules/root';

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
  
const createReducer = () => combineReducers({
    mapManifest: mapManifestReducer
});

export { createReducer };
export default configureStore;