import React from 'react';
import { View } from 'react-native';
import { mainStyles as styles } from './Root.styles';
import { Controls } from '../../map-controls';
import { Map } from '../../map';
import { Layers } from '../../layers'
import { SearchResult } from '../../search';
import { Portal } from 'react-native-paper';
import { MapTypes } from '../../map-types';
import { CoordinateTransition } from '../../coordinate-transition';

const Main = () => (
    <View style={styles.main}>
        <Map />
        <Hosted view={<Layers />} />
        <Hosted view={<CoordinateTransition />} />
        <Hosted view={<MapTypes />} />
        <Hosted view={<Controls />} />
        <Hosted view={<SearchResult />} />    
    </View>
);

const Hosted = ({ view }) => (
    <Portal.Host>
        <Portal>
            {view}
        </Portal>
    </Portal.Host>  
)

export default Main;