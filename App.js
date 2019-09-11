import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Navigator } from './modules/navigator';

const App = () => {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
