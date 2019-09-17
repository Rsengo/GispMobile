import React from 'react';
import { connect } from 'react-redux';
import { Navigator } from '../../navigator'
import { actions as rootActions } from '../redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native-paper';

const Spinner = () => (
    <ActivityIndicator animating={true} />
);

class Root extends React.Component {
    componentWillMount() {
        const { loadMapManifest } = this.props;
        loadMapManifest();
        // TODO: Проверить, мб работает
        // this.reload();
    }

    reload() {
        const { loadMapManifest } = this.props;
        loadMapManifest();
    }

    getContent() {
        const { 
            mapManifestLoadingProcessing, 
            error, 
            errorMessage } = this.props;
        
        if (mapManifestLoadingProcessing) {
            return (<Spinner />);
        }

        if (error) {
            return (<Spinner />);
        }

        return (<Navigator />)
    }

    render() {
        const content = this.getContent();
        return(
            { content }
        );
    }
}

const mapStateToProps = (state) => {
    const { 
        mapManifestLoadingProcessing, 
        error, 
        errorMessage } = state.root;
    
    return {
        mapManifestLoadingProcessing,
        error,
        errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...rootActions,
    };
    return bindActionCreators(actions, dispatch);
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Root);