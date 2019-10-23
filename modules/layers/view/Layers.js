import React from 'react'
import { BottomSheet } from '../../../components';
import Content from './Layers.Content'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as layersActions } from '../redux';
import { actions as controlsActions } from '../../map-controls'  

const Layers = ({
    layersTree, 
    activateLayer,
    isOpen,
    onClose
}) => (
    <BottomSheet scrollable isOpen={isOpen} onClose={onClose}>
        <Content layersTree={layersTree} activateLayer={activateLayer} />
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