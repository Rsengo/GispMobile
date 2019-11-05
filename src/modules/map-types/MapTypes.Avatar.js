import React from 'react';
import { Avatar as PaperAvatar } from 'react-native-paper';
import { avatarStyles as styles} from './MapTypes.styles';

const MapTypesAvatar = ({ img }) => (
    <PaperAvatar.Image 
        style={styles.avatar} 
        size={24} 
        source={img} 
    />
);

export default MapTypesAvatar
