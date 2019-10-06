import React from 'react'
import { BottomSheet } from '../../bottom-sheet'
import LayersList from './LayersList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as rootActions } from '../../root';
import { actions as controlsActions } from '../../map-controls'

const Layers = ({ 
  layersTree, 
  activateLayer,
  layersTreeDialogIsOpened,
  openLayersTreeDialog
}) => (
  <BottomSheet>
    <LayersList layersTree={layersTree} activateLayer={activateLayer} />
  </BottomSheet>
)

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