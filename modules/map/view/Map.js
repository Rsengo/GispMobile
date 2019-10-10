import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Map.styles';
import MapView, { WMSTile } from 'react-native-maps';
import { layerService } from '../../../services';
import { getWmsLayerUrl } from '../services/wmsService';
import { actions as mapActions } from '../redux';
import { actions as controlsActions } from '../../map-controls';

class Map extends React.Component {
  search = (coordinate) => {
    const { searchOnMap, openSearchResults } = this.props;
    searchOnMap(coordinate);
    openSearchResults(true);
  }

  render() {
    const { activeLayers, mapType } = this.props;
    return (
      <MapView 
        style={styles.map}
        mapType={mapType}
        provider={null}
        onPress={this.search}
      >
        {activeLayers.map(({ layerId, sublayers, layerOrder }) => {
          return (
            <WMSTile 
              key={layerId}
              urlTemplate={getWmsLayerUrl(layerId, sublayers)} 
              tileSize={256}
              zIndex={layerOrder}
              opacity={1}
            />
          )
        })}
      </MapView>
    );
  }
}

const mapStateToProps = ({ root, map }) => {
   const { listSublayers } = root;
  const activeSublayers = layerService.getActive(listSublayers);
  // TODO:
  const activeLayers = layerService.groupByTopLayer(activeSublayers).filter(x => x.layerId !== 47);

  const { mapType } = map;

  return { 
    activeLayers,
    mapType
  }
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    ...mapActions,
    ...controlsActions
  }

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);