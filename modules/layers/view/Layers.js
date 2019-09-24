import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import Layer from './Layer';
import { actions as rootActions } from '../../root';

const mapLayerToComponent = (layer, activateLayer) => {
    const { key, Id, ...childProps } = layer;
    return (
        <Layer 
            {...childProps} 
            layerKey={key} 
            itemId={Id}
            activateLayer={activateLayer} 
        />
    );
}

const Layers = ({ layersTree, activateLayer }) => {
    return (
        <ScrollView>
            <List.Section>
                { 
                    layersTree.map(x => 
                        mapLayerToComponent(x, activateLayer)) 
                }
            </List.Section>
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    const { layersTree } = state.root;
    
    return { layersTree }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...rootActions
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers);