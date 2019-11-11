import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { Root } from './src/modules/root';
import { defaultTheme } from './src/themes';
import { Api } from './src/api';
import { API_URL, LDAP_URL, LANGUAGE, FALLBACK_LANGUAGE } from './constants';
import { configureStore } from './src/store';
import { configureLocalization } from './src/localization';

const api = new Api(API_URL, LDAP_URL);
const store = configureStore({ api });

const i18n = configureLocalization({
  language: LANGUAGE,
  fallbackLanguage: FALLBACK_LANGUAGE
});

const App = () => {
  return (
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <PaperProvider theme={defaultTheme}>
          <Root />
        </PaperProvider>
      </I18nextProvider>
    </ReduxProvider>
  );
};

export default App;
