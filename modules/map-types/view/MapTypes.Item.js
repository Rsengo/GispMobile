import React from 'react';
import { Chip } from 'react-native-paper';
import styles from './MapTypes.styles';
import Avatar from './MapTypes.Avatar';

const Item = ({ title, type, img }) => (
    <Chip 
        style={styles.chip}
        avatar={<Avatar img={img} />}
        selected={mapType === type}
        onPress={() => this.selectItem(type)}
    >
        {title}
    </Chip>
);

export default Item;
