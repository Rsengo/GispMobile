import React from 'react';
import { FAB } from 'react-native-paper';
import styles from './Controls.styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as controlsActions } from './store';
import buttons from './Controls.buttons'

const Controls = ({activeModules, ...props}) => {
  return (
    <React.Fragment>
      {
        buttons.map(button => {
          const { style, small, icon, openMethod, linkedProp, showIfModuleActive } = button;
          const isActive = activeModules[linkedProp];
          const onPress = props[openMethod];

          var keys = Object.keys(activeModules).filter(x => x !== linkedProp);
   
          const allOtherClosed = keys
            .map(x => activeModules[x])
            .every(x => x === false);
            
          const visible = allOtherClosed && (showIfModuleActive ? isActive : !isActive)

          const onPressCallback = React.useCallback(() => { //TODO: not in loop
            onPress(!isActive)
          }, [isActive]);
          
          return (
            <FAB 
              key={linkedProp}
              visible={visible}
              style={styles[style]}
              small={small}
              icon={icon}
              onPress={onPressCallback}
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