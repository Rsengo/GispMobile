import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import Layer from './Layer';
import { Appbar } from '../../app-bar';
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

const Layers = ({ navigation, layersTree, activateLayer }) => {
    return (
        <View>
            <Appbar 
                onBackPress={navigation.goBack} 
                title="Дерево слоев"
            />
            <ScrollView>
                <List.Section>
                    { 
                        layersTree.map(x => 
                            mapLayerToComponent(x, activateLayer)) 
                    }
                </List.Section>
            </ScrollView>
        </View>
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