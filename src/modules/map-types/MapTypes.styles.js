import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        width: 72,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: { 
        borderColor: '#00000030',
        borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    badge: {
        position: 'absolute', 
        top:0, 
        right: 0, 
        zIndex: 1,
        backgroundColor: '#ffd200',
        color: '#000000'
    },
    text: {
        textAlign: 'center',
        width: '100%'
    }
});

export default styles;