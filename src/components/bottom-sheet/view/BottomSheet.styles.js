import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
    header: {
      backgroundColor: '#00000070',
      shadowColor: '#000000'
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 4,
      borderRadius: 4,
      backgroundColor: '#ffd200',
      marginBottom: 5,
      marginTop: 5,
    }
});

const contentStyles = StyleSheet.create({
    bodyContainer: {
      backgroundColor: '#fff',
      height: '100%'
    }
});

export { headerStyles, contentStyles };