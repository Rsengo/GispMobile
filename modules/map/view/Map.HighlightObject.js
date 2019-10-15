import React from 'react';
import Geojson from './Map.Geojson';

const HighlightObject = ({ geoJson }) => (
    <Geojson 
        geojson={geoJson} 
        color={'#000000'} 
        strokeWidth={3} 
        fillColor={'#0000ff04'} 
        strokeColor={'#000000'} /> 
);

export default HighlightObject;