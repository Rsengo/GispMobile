import * as React from 'react';
import { List } from 'react-native-paper';
import { Image } from 'react-native';
import styles from './Layer.styles';

const LayerLegend = ({
    base64img,
    imgUrl,
    legendKey,
    legendTitle
}) => {
    const uri = imgUrl ? imgUrl : `data:image/png;base64,${base64img}`;
    const img = (<Image style={styles.img} source={{uri}} />);

    const imgCreate = React.useCallback(() => img, [base64img, imgUrl]);
    
    return (
        <List.Item title={legendTitle} key={legendKey} left={imgCreate} />
    );
}

export default LayerLegend;