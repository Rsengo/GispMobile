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
    const img = React.useMemo(() => {
        const uri = imgUrl ? imgUrl : `data:image/png;base64,${base64img}`;
        return (<Image style={styles.img} source={{uri}} />);
    }, [base64img, imgUrl]);
    
    return (
        <List.Item title={legendTitle} key={legendKey} left={() => img} />
    );
}

export default LayerLegend;