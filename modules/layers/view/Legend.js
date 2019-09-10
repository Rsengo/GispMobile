import * as React from 'react';
import { List } from 'react-native-paper';
import { Image } from 'react-native';
import styles from './Legend.styles';

const Legend = ({
    base64img,
    imgUrl,
    legendKey,
    legendTitle
}) => {
    const uri = imgUrl ? imgUrl : `data:image/png;base64,${base64img}`;
    const img = (
        <Image
          style={styles.img}
          source={{uri}}
        />
    );
    return (
        <List.Item title={legendTitle} key={legendKey} left={() => img} />
    );
}

export default Legend;