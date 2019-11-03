import React from 'react';
import { Chip } from 'react-native-paper';
import { chipStyles as styles} from './MapTypes.styles';
import MapTypesAvatar from './MapTypes.Avatar';
import { useTranslation } from 'react-i18next';

const MapTypesItem = ({ title, type, img, mapType, selectItem }) => {
    const [translate] = useTranslation();

    return (
        <Chip 
            style={styles.chip}
            avatar={<MapTypesAvatar img={img} />}
            selected={mapType === type}
            onPress={() => selectItem(type)}
        >
            {translate(title)}
        </Chip>
    );
}

export default MapTypesItem;
