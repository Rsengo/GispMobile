import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { Root } from './modules/root';
import { defaultTheme } from './themes';
import { Api } from './api';
import { API_URL } from './constants';
import { configureStore } from './store';

const api = new Api(API_URL);
const store = configureStore({ api });

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={defaultTheme}>
        <Root />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
