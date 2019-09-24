import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as rootActions } from '../redux';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';
import styles from './Root.styles';
import { Controls } from '../../map-controls';
import { Map } from '../../map';

const Spinner = () => (
    <View style={styles.spinner}>
        <ActivityIndicator animating={true} size='large' />
    </View>
);

const Reload = ({message, onPress}) => {
    const [open, setOpen] = React.useState(true);
    return (
        <View style={styles.reload}>
            {/* TODO: reload, loop, car-engine-start */}
            <Button icon="reload" mode="contained" onPress={onPress} />
            <Snackbar
              visible={open}
              onDismiss={() => setOpen(false)}
            >
              {message}
            </Snackbar>
        </View>
    );
}

const Main = () => (
    <View style={styles.main}>
        <Map />
        <Controls />
    </View>
);

class Root extends React.Component {
    componentWillMount() {
        const { loadMapManifest } = this.props;
        loadMapManifest();
        // TODO: Проверить, мб работает
        // this.reload();
    }

    reload = () => {
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
            return <Reload message={errorMessage} onPress={this.reload} />;
        }

        return <Main />
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