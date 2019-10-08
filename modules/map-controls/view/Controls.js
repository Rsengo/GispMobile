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
  searchResultsIsOpen
}) => {
  return (
    <React.Fragment>
      <FAB
        visible={!searchResultsIsOpen}
        style={styles.first}
        small
        icon="layers"
        onPress={() => openLayersTreeDialog(1)}
      />
      <FAB
        visible={!searchResultsIsOpen}
        style={styles.second}
        small
        icon="map"
        onPress={() => openMapTypeDialog(true)}
      />
      <FAB
        style={styles.third}
        small
        icon="search"
        onPress={() => openSearchResults(!searchResultsIsOpen)}
      />
      <FAB
        visible={!searchResultsIsOpen}
        style={styles.fourth}
        small
        icon="settings"
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ controls }) => {
  const { searchResultsIsOpen } = controls;

  return {
    searchResultsIsOpen
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