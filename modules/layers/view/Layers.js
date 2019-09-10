import * as React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import apiService from '../../../services/apiService';
import Layer from './Layer';

const Layers = () => {
    const mapManifest = apiService.getMapManifest();
    const { layersTree } = mapManifest; 
    return (
        <ScrollView>
            <List.Section title="Слои">
                {
                    layersTree.map(x => {
                        const { key, ...childProps } = x;
                        return (<Layer {...childProps} layerKey={key} />);
                    })
                }
            </List.Section>
        </ScrollView>
    );
}

export default Layers;