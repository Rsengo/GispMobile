import React from 'react'
import { BottomSheet } from '../../../components';
import LayersList from './Layers.List'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as layersActions } from '../store';
import { actions as controlsActions } from '../../controls'  

const Layers = ({
    layersTree, 
    activateLayer,
    isOpen,
    onClose
}) => (
    <BottomSheet scrollable isOpen={isOpen} onClose={onClose}>
        <LayersList layersTree={layersTree} activateLayer={activateLayer} />
    </BottomSheet>
)

const mapStateToProps = ({ layers, controls }) => {
  const { layersTree } = layers;
  const { layersTreeDialogIsOpened: isOpen } = controls;
  
  return { 
      layersTree,
      isOpen
  }
};

const mapDispatchToProps = (dispatch) => {
    const { openLayersTreeDialog } = controlsActions;
    const actions = {
      ...layersActions,
      ...controlsActions,
      onClose: () => openLayersTreeDialog(false)
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers);