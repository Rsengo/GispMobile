import { StyleSheet } from 'react-native';

export const metricInputStyles = StyleSheet.create({
    input: {
        width: '100%', 
        backgroundColor: '#fff', 
        marginBottom: 50, 
        marginTop: 5
    },
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        width: '100%'
    }
});

export const degreeInputStyles = StyleSheet.create({
    input: {
        width: '30%', 
        backgroundColor: '#fff', 
        marginBottom: 5, 
    },
    container: {
        display: 'flex', 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-around'
    }
});

export const inputContainerStyles = StyleSheet.create({
    inputsContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',
        height: '50%'
    }
});