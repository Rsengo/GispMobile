import React from 'react';
import { Chip } from 'react-native-paper';
import { chipStyles as styles} from './MapTypes.styles';
import MapTypesAvatar from './MapTypes.Avatar';
import { useTranslation } from 'react-i18next';

const MapTypesItem = ({ title, type, img, selected, selectItem }) => {
    const [translate] = useTranslation();
    const selectItemCallback = React.useCallback(
        () => selectItem(type), 
        [type]
    );

    return (
        <Chip 
            style={styles.chip}
            avatar={<MapTypesAvatar img={img} />}
            selected={selected}
            onPress={selectItemCallback}
        >
            {translate(title)}
        </Chip>
    );
}

export default MapTypesItem;
