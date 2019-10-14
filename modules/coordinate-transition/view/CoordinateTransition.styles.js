import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        width: '100%', 
        backgroundColor: '#fff', 
        marginBottom: 5, 
        marginTop: 5
    },
    inputsContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%'
    },
    controls: {
        width: '100%', 
        display: 'flex',
        flexDirection: 'column-reverse',
    }, 
    mainContainer: {
        display:'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%', 
        height: '90%', 
        backgroundColor: '#ff0'
    },
    contentContainer: {
        display:'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '90%', 
        height: '100%', 
        backgroundColor: '#f00'
    }
});

export default styles;