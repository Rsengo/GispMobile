import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navigator } from '../../navigator'
import { actions as rootActions } from '../redux';
import { ActivityIndicator } from 'react-native-paper';
import { View, Text } from 'react-native';
import styles from './Root.styles';

const Spinner = () => (
    <View style={styles.spinner}>
        <ActivityIndicator animating={true} size='large' />
    </View>
);

const Reload = ({message}) => (
    <View style={styles.reload}>
        <Text>{message}</Text>
    </View>
)

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

    render() {
        const { 
            mapManifestLoadingProcessing, 
            error, 
            errorMessage } = this.props;
        
        if (mapManifestLoadingProcessing) {
            return <Spinner />;
        }

        if (error) {
            return <Reload message={errorMessage} />;
        }

        return <Navigator />
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