import { MAP_TYPES } from 'react-native-maps';

const entries = [
    { 
        title: 'mapTypes.satellite', 
        type: MAP_TYPES.SATELLITE,
        img: require('../../../assets/map-types/satellite.png')
    },
    { 
        title: 'mapTypes.standard', 
        type: MAP_TYPES.STANDARD,
        img: require('../../../assets/map-types/standard.png')
    },
    { 
        title: 'mapTypes.none', 
        type: MAP_TYPES.NONE,
        img: null
    }
];

export default entries;