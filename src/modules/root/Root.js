import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as rootActions } from './store';
import RootSpinner from './Root.Spinner';
import RootReload from './Root.Reload';
import RootMain from './Root.Main';

const Root = ({
    appReady, 
    error, 
    errorMessage,
    loadMapManifest
}) => {
    const reload = React.useCallback(loadMapManifest, []);
    React.useEffect(reload, []);

    if (appReady) {
        return <RootSpinner />;
    }

    if (error) {
        return <RootReload message={errorMessage} onPress={reload} />;
    }

    return <RootMain />
}

const mapStateToProps = ({ map }) => {  
    return {
        ...map
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...rootActions
    };
    return bindActionCreators(actions, dispatch);
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Root);