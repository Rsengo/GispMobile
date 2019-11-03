import React from 'react';
import { Chip } from 'react-native-paper';
import { chipStyles as styles} from './MapTypes.styles';
import MapTypesAvatar from './MapTypes.Avatar';
import { withTranslation } from 'react-i18next';

const MapTypesItem = ({ title, type, img, mapType, selectItem, t }) => (
    <Chip 
        style={styles.chip}
        avatar={<MapTypesAvatar img={img} />}
        selected={mapType === type}
        onPress={() => selectItem(type)}
    >
        {t(title)}
    </Chip>
);

export default withTranslation()(MapTypesItem);
