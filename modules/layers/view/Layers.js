import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { List } from '../../map-controls/view/node_modules/react-native-paper';
import apiService from '../../../services/apiService';
import Layer from './Layer';
import { Appbar } from '../../app-bar';

const Layers = ({ navigation }) => {
    const mapManifest = apiService.getMapManifest();
    const { layersTree } = mapManifest; 
    return (
        <View>
            <Appbar onBackPress={navigation.goBack} />
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
        </View>
    );
}

export default Layers;