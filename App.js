import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { Navigator } from './modules/navigator';
import { theme } from './themes';
import { Api } from './api'
import { configureStore } from './store'

// TODO:
const apiUrl = '';
const api = new Api(apiUrl);
const store = configureStore({ api });

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
