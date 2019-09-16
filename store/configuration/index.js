import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';
  import thunk from 'redux-thunk';

// import { reducer as localeReducer } from './features/locale';
// import { reducer as userSettingsReducer } from './features/userSettings';
// import { reducer as authReducer } from './features/auth';
// import { reducer as notifyReducer } from './features/notify';
// import { reducer as profileReducer } from './features/profile';
// import { reducer as resumeReducer } from './features/resumes';
// import { reducer as vacancyReducer } from './features/vacancies';


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
    // userSettings: userSettingsReducer,
    // auth: authReducer,
    // notify: notifyReducer,
    // locale: localeReducer,
    // profile: profileReducer,
    // resume: resumeReducer,
    // vacancy: vacancyReducer,
});

export { createReducer };
export default configureStore;