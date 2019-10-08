import React from 'react'
import { BottomSheet } from '../../bottom-sheet'
import LayersList from './LayersList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as rootActions } from '../../root';
import { actions as controlsActions } from '../../map-controls'  

class Layers extends React.Component {
    render() {
        const { 
            layersTree, 
            activateLayer,
            isOpen,
            onClose
        } = this.props;
        return (
            <BottomSheet scrollable isOpen={isOpen} onClose={onClose}>
                <LayersList layersTree={layersTree} activateLayer={activateLayer} />
            </BottomSheet>
        );
    }
}

const mapStateToProps = ({ root, controls }) => {
  const { layersTree } = root;
  const { layersTreeDialogIsOpened: isOpen } = controls;
  
  return { 
      layersTree,
      isOpen
  }
};

const mapDispatchToProps = (dispatch) => {
    const { openLayersTreeDialog } = controlsActions;
    const actions = {
      ...rootActions,
      ...controlsActions,
      onClose: () => openLayersTreeDialog(false)
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers);