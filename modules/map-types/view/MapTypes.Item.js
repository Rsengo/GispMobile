import React from 'react';
import { Chip } from 'react-native-paper';
import { chipStyles as styles} from './MapTypes.styles';
import Avatar from './MapTypes.Avatar';

const Item = ({ title, type, img, mapType, selectItem }) => (
    <Chip 
        style={styles.chip}
        avatar={<Avatar img={img} />}
        selected={mapType === type}
        onPress={() => selectItem(type)}
    >
        {title}
    </Chip>
);

export default Item;
