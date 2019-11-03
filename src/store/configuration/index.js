import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';
import thunk from 'redux-thunk';

import { reducer as rootReducer } from '../../modules/root';
import { reducer as mapReducer } from '../../modules/map';
import { reducer as controlsReducer } from '../../modules/controls';
import { reducer as layersReducer } from '../../modules/layers';
import { reducer as searchReducer } from '../../modules/search';
import { reducer as coordinateJumpReducer } from '../../modules/coordinate-jump';

const createReducer = () => combineReducers({
  root: rootReducer,
  map: mapReducer,
  controls: controlsReducer,
  layers: layersReducer,
  search: searchReducer,
  coordinateJump: coordinateJumpReducer
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