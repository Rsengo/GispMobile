import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
});

const getFabStyles = (num) => ({
    backgroundColor: '#fff',
    position: 'absolute',
    right: 5,
    bottom: 5 * (num + 1)
});

export { styles, getFabStyles };