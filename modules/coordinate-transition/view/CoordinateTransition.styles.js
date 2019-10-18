import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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