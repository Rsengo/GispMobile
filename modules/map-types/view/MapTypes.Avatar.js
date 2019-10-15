import React from 'react';
import { Avatar as PaperAvatar } from 'react-native-paper';
import styles from './MapTypes.styles';

const Avatar = ({ img }) => (
    <PaperAvatar.Image 
        style={styles.avatar} 
        size={24} 
        source={img} 
    />
);

export default Avatar
