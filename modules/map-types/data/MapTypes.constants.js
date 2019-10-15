import { MAP_TYPES } from 'react-native-maps';

const entries = [
    { 
        title: 'Спутник', 
        type: MAP_TYPES.SATELLITE,
        img: require('../../../assets/map-types/satellite.png')
    },
    { 
        title: 'Схема', 
        type: MAP_TYPES.STANDARD,
        img: require('../../../assets/map-types/standard.png') 
    },
    { 
        title: 'Без подложки', 
        type: MAP_TYPES.NONE,
        img: null 
    }
];

export { entries };