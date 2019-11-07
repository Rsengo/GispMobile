import React from 'react';
import { View } from 'react-native';
import MapTypesItem from './MapTypes.Item';
import styles from './MapTypes.styles';

const MapTypesContent = ({ mapType, entries, selectItem }) => {
    const selectItemCallback = React.useCallback(selectItem, []);

    return (
        <View style={styles.container}>
            {
                entries.map((entry, idx) => (
                    <MapTypesItem 
                        key={idx} 
                        selected={mapType === entry.type} 
                        selectItem={selectItemCallback} 
                        {...entry} 
                    />
                ))
            }
        </View>
    )
};

export default MapTypesContent;
