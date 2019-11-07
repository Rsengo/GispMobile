import { MAP_TYPES } from 'react-native-maps';

const entries = [
    { 
        title: 'mapTypes.satellite', 
        type: MAP_TYPES.SATELLITE,
        icon: 'map' //TODO:mdiSatelliteVariant
    },
    { 
        title: 'mapTypes.standard', 
        type: MAP_TYPES.STANDARD,
        icon: 'map' //TODO:mdiMapMarkerPath
    },
    { 
        title: 'mapTypes.none', 
        type: MAP_TYPES.NONE,
        icon: 'map'  //TODO:mdiBorderNoneVariant
    }
];

export default entries;