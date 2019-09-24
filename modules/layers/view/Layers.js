import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import Layer from './Layer';
import { actions as rootActions } from '../../root';

const Layers = ({ layersTree, activateLayer }) => {
    return (
        <ScrollView>
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