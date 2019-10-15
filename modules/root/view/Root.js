import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as rootActions } from '../redux';
import { actions as mapActions } from '../../map'
import { ActivityIndicator } from 'react-native-paper';
import { View, Text } from 'react-native';
import styles from './Root.styles';
import { Controls } from '../../map-controls';
import { Map } from '../../map';
import { Layers } from '../../layers'
import { SearchResult } from '../../search';
import { Portal } from 'react-native-paper';
import { MapTypes } from '../../map-types';
import { CoordinateTransition } from '../../coordinate-transition';

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

        <Portal.Host>
            <Portal>
                <Layers />
            </Portal>
        </Portal.Host>
        
        <Portal.Host>
            <Portal>
                <CoordinateTransition />
            </Portal>
        </Portal.Host>

        <Portal.Host>
            <Portal>
                <MapTypes />
            </Portal>
        </Portal.Host>

        <Portal.Host>
            <Portal>
                <Controls />
            </Portal>
        </Portal.Host>

        <Portal.Host>
            <Portal>
                <SearchResult />
            </Portal>
        </Portal.Host>      
    </View>
);

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