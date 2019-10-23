import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapView from 'react-native-maps';
import { layerService } from '../../../services';
import { actions as mapActions } from '../redux';
import { actions as controlsActions } from '../../map-controls';
import { actions as searchActions } from '../../search';
import Layer from './Map.Layer';
import HighlightObject from './Map.HighlightObject';
import styles from './Map.styles';

class Map extends React.Component {
  search = (e) => {
    const { coordinate } = e;
    const { searchOnMap, openSearchResults } = this.props;
    searchOnMap(coordinate);
    openSearchResults(true);
  }

  render() {
    const { activeLayers, mapType, geoJson, changeRegion, region } = this.props;
    return (
      <MapView 
        style={styles.map}
        mapType={mapType}
        provider={null}
        region={region}
        onRegionChangeComplete={changeRegion}
        onPress={({nativeEvent}) => this.search(nativeEvent)}
      >
        { activeLayers.map(activeLayer => <Layer {...activeLayer} key={activeLayer.layerId} />) }
        { geoJson ? <HighlightObject geoJson={geoJson} /> : null }
      </MapView>
    );
  }
}

const mapStateToProps = ({ layers, map }) => {
   const { listSublayers } = layers;
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
    ...controlsActions,
    ...searchActions
  }

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);