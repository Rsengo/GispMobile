import * as React from 'react';
import { List } from 'react-native-paper';
import Layer from './Layer';

const LayersList = ({ layersTree, activateLayer }) => {
    return (
        <List.Section>
            { 
                layersTree.map(x => {
                    const { key, Id, ...childProps } = x;
                    return (
                        <Layer 
                            {...childProps}
                            layerKey={key} 
                            itemId={Id}
                            activateLayer={activateLayer} 
                        />
                    ) 
                })
            }
        </List.Section>
    );
}

export default LayersList;