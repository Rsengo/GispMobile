import { StyleSheet } from 'react-native';

const spinnerStyles = StyleSheet.create({
    spinner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

const reloadStyles = StyleSheet.create({
  reload: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mainStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export { 
  spinnerStyles, 
  reloadStyles, 
  mainStyles 
};