import React from 'react';
import MapTypesItem from './MapTypes.Item';

const MapTypesContent = ({ mapType, entries, selectItem }) => (
    entries.map((entry, idx) => (
        <MapTypesItem 
            key={idx} 
            mapType={mapType} 
            selectItem={selectItem} 
            {...entry} 
        />
    ))
);

export default MapTypesContent;
