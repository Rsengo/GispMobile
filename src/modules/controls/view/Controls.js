import React from 'react';
import { FAB } from 'react-native-paper';
import styles from './Controls.styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as controlsActions } from '../store';
import buttons from './Controls.buttons'

const Controls = ({activeModules, ...props}) => {
  return (
    <React.Fragment>
      {
        buttons.map(button => {
          const { style, small, icon, openMethod, linkedProp, showIfModuleActive } = button;
          const isActive = activeModules[linkedProp];
          const onPress = props[openMethod];

          var keys = Object.keys(activeModules);
          var filteredKeys = showIfModuleActive 
            ? keys.filter(x => x !== linkedProp) 
            : keys;
          const visible = filteredKeys
            .map(x => activeModules[x])
            .every(x => x === false); 

          return (
            <FAB 
              visible={visible}
              style={styles[style]}
              small={small}
              icon={icon}
              onPress={() => onPress(!isActive)}
            />
          )
        })
      }
    </React.Fragment>
  );
};

const mapStateToProps = ({ controls }) => {
  return {
    activeModules: {
      ...controls
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
      ...controlsActions,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)