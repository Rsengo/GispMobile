import React from 'react';
import Item from './MapTypes.Item';

const Content = ({ mapType, entries }) => (
    entries.map((entry, idx) => (
        <Item key={idx} mapType={mapType} {...entry} />
    ))
);

export default Content;
