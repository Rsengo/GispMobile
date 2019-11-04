import React from 'react';
import Geojson from './Map.Geojson';
import { hideIfNoData } from '../../../hoc';

const MapHighlightObject = ({ geoJson }) => (
    <Geojson 
        geojson={geoJson} 
        color={'#000000'} 
        strokeWidth={3} 
        fillColor={'#0000ff04'} 
        strokeColor={'#000000'} /> 
);

const hasNoData = ({ geoJson }) => !geoJson;

export default hideIfNoData(hasNoData)(MapHighlightObject);