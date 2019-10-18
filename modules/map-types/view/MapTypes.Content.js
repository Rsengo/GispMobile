import React from 'react';
import Item from './MapTypes.Item';

const Content = ({ mapType, entries, selectItem }) => (
    entries.map((entry, idx) => (
        <Item key={idx} mapType={mapType} selectItem={selectItem} {...entry} />
    ))
);

export default Content;
