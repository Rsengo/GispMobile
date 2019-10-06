import * as React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import Layer from './Layer';
import styles from './LayersList.styles';

const LayersList = ({ layersTree, activateLayer }) => {
    return (
        <ScrollView 
            style={styles.scrollView}
        >
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
        </ScrollView>
    );
}

export default LayersList;