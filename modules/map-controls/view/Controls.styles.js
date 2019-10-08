import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    first: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: 5,
        bottom: 5 * 1 + 50 * 0
    },

    second: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: 5,
        bottom: 5 * 2 + 50 * 1
    },

    third: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: 5,
        top: 50
    },

    fourth: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: 5,
        bottom: 5 * 3 + 50 * 2
    }
});

const getFabStyles = (num) => ({
    backgroundColor: '#fff',
    position: 'absolute',
    right: 5,
    bottom: 5 * (num + 1)
});

export { styles, getFabStyles };