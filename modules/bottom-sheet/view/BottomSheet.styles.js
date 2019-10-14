import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#f7f5eee8',
      shadowColor: '#000000',
      paddingTop: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    bodyContainer: {
      backgroundColor: '#fff',
      height: '100%'
    }
});

export default styles;