import React from 'react';
import Geojson from './Map.Geojson';
import { hideIfNoData } from '../../hoc';
import { GEOMETRY } from '../../../constants';

const MapHighlightObject = ({ geoJson }) => (
    <Geojson 
        geojson={geoJson} 
        color={GEOMETRY.color} 
        strokeWidth={GEOMETRY.strokeWidth} 
        fillColor={GEOMETRY.fillColor} 
        strokeColor={GEOMETRY.strokeColor} /> 
);

const hasNoData = ({ geoJson }) => !geoJson;

export default hideIfNoData(hasNoData)(MapHighlightObject);