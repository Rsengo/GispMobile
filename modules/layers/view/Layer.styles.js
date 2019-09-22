import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection:'row', 
        justifyContent: 'flex-start'
    },
    checkboxContainer: {
        paddingTop: 8, 
        paddingLeft: 0.1
    },
    itemContainer: {
        display: 'flex', 
        flex: 1
    }
});

export default styles;