import * as React from 'react';
import { List } from 'react-native-paper';
import { Layer } from '../layer';

const LayersList = ({ layersTree, activateLayer }) => {
    const activateLayerCallback = React.useCallback(activateLayer, []);

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
                            key={key}
                            activateLayer={activateLayerCallback} 
                        />
                    ) 
                })
            }
        </List.Section>
    );
}

export default LayersList;