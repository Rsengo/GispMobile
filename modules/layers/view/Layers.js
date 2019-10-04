import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LayersList from './LayersList';
import { actions as rootActions } from '../../root';
import { actions as controlsActions } from '../../map-controls'

const Layers = ({ 
    layersTree, 
    activateLayer,
    layersTreeDialogIsOpened,
    openLayersTreeDialog
}) => {
    return (
        <Portal.Host>
            <Portal>
                <Dialog
                visible={layersTreeDialogIsOpened}
                onDismiss={() => openLayersTreeDialog(false)}
                >
                    <Dialog.ScrollArea>
                        <LayersList layersTree={layersTree} activateLayer={activateLayer} />
                    </Dialog.ScrollArea>
                </Dialog>
            </Portal>
        </Portal.Host>
    );
}

const mapStateToProps = ({ root, controls }) => {
    const { layersTree } = root;
    const { layersTreeDialogIsOpened } = controls;
    
    return { 
        layersTree,
        layersTreeDialogIsOpened
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...rootActions,
        ...controlsActions
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers);