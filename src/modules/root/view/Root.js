import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as rootActions } from '../store';
import RootSpinner from './Root.Spinner';
import RootReload from './Root.Reload';
import RootMain from './Root.Main';

class Root extends React.Component {
    componentWillMount() {
        this.reload();
    }

    reload = () => {
        const { loadMapManifest } = this.props;
        loadMapManifest();
    }

    render() {
        const { 
            mapManifestLoadingProcessing, 
            error, 
            errorMessage
        } = this.props;
        
        if (mapManifestLoadingProcessing) {
            return <RootSpinner />;
        }

        if (error) {
            return <RootReload message={errorMessage} onPress={this.reload} />;
        }

        return <RootMain />
    }
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