import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as rootActions } from '../redux';
import { actions as mapActions } from '../../map'
import Spinner from './Root.Spinner';
import Reload from './Root.Reload';
import Main from './Root.Main';

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
            errorMessage,
            defaultExtent,
            changeRegion
         } = this.props;
        
        if (mapManifestLoadingProcessing) {
            return <Spinner />;
        }

        if (error) {
            return <Reload message={errorMessage} onPress={this.reload} />;
        }

        if (defaultExtent) {
            changeRegion(defaultExtent);
        }

        return <Main />
    }
}

const mapStateToProps = ({ root }) => {  
    return {
        ...root
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...rootActions,
        ...mapActions
    };
    return bindActionCreators(actions, dispatch);
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Root);