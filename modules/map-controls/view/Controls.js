import React from 'react';
import { FAB } from 'react-native-paper';
import { styles, getFabStyles } from './Controls.styles';
import { withTheme } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as controlsActions } from '../redux';

const Controls = ({ 
  openLayersTreeDialog,
  openMapTypeDialog,
  openSearchResults,
  openCoordinateTransitionDialog,
  coordinateTransitionDialogIsOpened,
  searchResultsIsOpened,
  mapTypeDialogIsOpened,
  layersTreeDialogIsOpened
}) => {
  return (
    <React.Fragment>
      <FAB
        visible={!searchResultsIsOpened}
        style={styles.first}
        small
        icon="layers"
        onPress={() => openLayersTreeDialog(!layersTreeDialogIsOpened)}
      />
      <FAB
        visible={!searchResultsIsOpened}
        style={styles.second}
        small
        icon="map"
        onPress={() => openMapTypeDialog(!mapTypeDialogIsOpened)}
      />
      <FAB
        style={styles.third}
        small
        icon="search"
        onPress={() => openSearchResults(!searchResultsIsOpened)}
      />
      <FAB
        visible={!searchResultsIsOpened}
        style={styles.fourth}
        small
        icon="settings"
        onPress={() => openCoordinateTransitionDialog(!coordinateTransitionDialogIsOpened)}
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ controls }) => {
  return {
    ...controls
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
      ...controlsActions,
  };
  return bindActionCreators(actions, dispatch);
}

const ThemedControls = withTheme(Controls);

export default connect(mapStateToProps, mapDispatchToProps)(ThemedControls);