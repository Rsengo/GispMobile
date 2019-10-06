import React from 'react';
import { Dialog, Portal, FAB } from 'react-native-paper';
import { styles, getFabStyles } from './Controls.styles';
import { withTheme } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as controlsActions } from '../redux';

const Controls = ({ 
  openLayersTreeDialog,
  openMapTypeDialog,
}) => {
  return (
    <Portal.Host>
      <Portal>
        <FAB
          style={getFabStyles(1)}
          small
          icon="layers"
          onPress={() => openLayersTreeDialog(true)}
        />
        <FAB
          style={getFabStyles(2)}
          small
          icon="settings"
          onPress={() => openMapTypeDialog(true)}
        />
      </Portal>
    </Portal.Host>
  );
};

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
  const actions = {
      ...controlsActions,
  };
  return bindActionCreators(actions, dispatch);
}

const ThemedControls = withTheme(Controls);

export default connect(mapStateToProps, mapDispatchToProps)(ThemedControls);