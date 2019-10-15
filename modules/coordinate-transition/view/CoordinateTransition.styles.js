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
        width: '100%',
        height: '50%'
    },
    controls: {
        width: '100%', 
        height: '10%',
        display: 'flex',
        flexDirection: 'column-reverse',
    }, 
    mainContainer: {
        display:'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
    },
    contentContainer: {
        display:'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        width: '90%', 
        height: '100%', 
    },
    selector: {
        width: '100%', 
        height: '10%'
    }
});

export default styles;