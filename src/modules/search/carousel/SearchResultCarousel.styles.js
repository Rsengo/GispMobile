import { StyleSheet } from 'react-native';

const itemStyles = StyleSheet.create({
    itemContainer: {
        display: 'flex', 
        flexDirection: 'column',
        width: '100%', 
        height: '100%',
        backgroundColor: '#fff',
        paddingRight: 15, 
        paddingLeft: 15, 
        paddingTop: 5, 
        paddingBottom: 10,
        borderRadius: 10
    },
    itemContent: {
        display: 'flex', 
        flexDirection:'column', 
        justifyContent: 'flex-start', 
        flex: 1
    },
    itemActions: {
        display: 'flex', 
        flexDirection:'column', 
        justifyContent: 'flex-end', 
        flex: 1
    }
});

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        bottom: 5
    }
});

export { styles, itemStyles };