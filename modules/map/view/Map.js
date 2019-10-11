import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Map.styles';
import MapView, { WMSTile, Marker } from 'react-native-maps';
import { layerService } from '../../../services';
import { getWmsLayerUrl } from '../services/wmsService';
import { actions as mapActions } from '../redux';
import { actions as controlsActions } from '../../map-controls';
import Geojson from './Geojson';

class Map extends React.Component {
  search = (e) => {
    const { coordinate } = e;
    console.log('aaaaa: ' + JSON.stringify(coordinate));
    const { searchOnMap, openSearchResults } = this.props;
    searchOnMap(coordinate);
    openSearchResults(true);
  }

  render() {
    const { activeLayers, mapType, geoJson } = this.props;
    console.log('gjs:' + JSON.stringify(geoJson) );
    return (
      <MapView 
        style={styles.map}
        mapType={mapType}
        provider={null}
        onPress={({nativeEvent}) => this.search(nativeEvent)}
      >
        {
          activeLayers.map(({ layerId, sublayers, layerOrder }) => {
            return (
              <WMSTile 
                key={layerId}
                urlTemplate={getWmsLayerUrl(layerId, sublayers)} 
                tileSize={256}
                zIndex={layerOrder}
                opacity={1}
              />
            )
          })
        }
        {geoJson ? <Geojson geojson={geoJson} color={'#000000'} strokeWidth={10} fillColor={'#000000'} strokeColor={'#000000'} /> : null}
      </MapView>
    );
  }
}

const mapStateToProps = ({ root, map }) => {
   const { listSublayers } = root;
  const activeSublayers = layerService.getActive(listSublayers);
  // TODO:
  const activeLayers = layerService.groupByTopLayer(activeSublayers).filter(x => x.layerId !== 47);

  return { 
    ...map,
    activeLayers,
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