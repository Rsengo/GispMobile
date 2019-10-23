import { StyleSheet } from 'react-native';

const MARGIN = 5;
const VERTICAL_MARGIN = 50;

const _getBottomPosition = (index) => 
    MARGIN * (index + 1) + VERTICAL_MARGIN * index;

const _getTopPosition = (index) => 
    VERTICAL_MARGIN * (index + 1) + MARGIN * index;

const styles = StyleSheet.create({
    layers: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: MARGIN,
        bottom: _getBottomPosition(0)
    },

    map: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: MARGIN,
        bottom: _getBottomPosition(1)
    },

    search: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: MARGIN,
        top: _getTopPosition(0)
    },

    coordinateTransition: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: MARGIN,
        bottom: getBottomPosition(2)
    }
});

export default styles;