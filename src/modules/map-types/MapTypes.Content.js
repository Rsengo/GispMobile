import React from 'react';
import MapTypesItem from './MapTypes.Item';

const MapTypesContent = ({ mapType, entries, selectItem }) => {
    const selectItemCallback = React.useCallback(selectItem, []);

    return (
        entries.map((entry, idx) => (
            <MapTypesItem 
                key={idx} 
                selected={mapType === entry.type} 
                selectItem={selectItemCallback} 
                {...entry} 
            />
        ))
    )
};

export default MapTypesContent;
