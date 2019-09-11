import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Navigator } from './modules/navigator';
import { theme } from './themes';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
