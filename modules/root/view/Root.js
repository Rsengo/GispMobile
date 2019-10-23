import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
            errorMessage
        } = this.props;
        
        if (mapManifestLoadingProcessing) {
            return <Spinner />;
        }

        if (error) {
            return <Reload message={errorMessage} onPress={this.reload} />;
        }

        return <Main />
    }
}

const mapStateToProps = ({ map }) => {  
    return {
        ...map
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...mapActions
    };
    return bindActionCreators(actions, dispatch);
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Root);