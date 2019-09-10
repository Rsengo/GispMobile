import React from 'react';
import { Root } from './modules/root';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Root />
    </PaperProvider>
  );
};

export default App;
