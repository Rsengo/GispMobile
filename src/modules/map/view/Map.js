import React from 'react';
import { connect, batch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Animated as AnimatedMap } from 'react-native-maps';
import { layerService } from '../../../services';
import { actions as mapActions } from '../store';
import { actions as controlsActions } from '../../controls';
import { actions as searchActions } from '../../search';
import MapLayer from './Map.Layer';
import MapHighlightObject from './Map.HighlightObject';
import styles from './Map.styles';

const Map = ({ 
  activeLayers, 
  mapType, 
  geoJson, 
  changeRegion, 
  region, 
  searchOnMap, 
  openSearchResults 
}) => {
  const search = () =>
    batch(() => {
      searchOnMap(coordinate);
      openSearchResults(true);
    });
  
  return (
    <AnimatedMap 
      style={styles.map}
      mapType={mapType}
      provider={null}
      region={region}
      onRegionChangeComplete={changeRegion}
      onPress={({nativeEvent}) => search(nativeEvent)}
    >
      { activeLayers.map(activeLayer => <MapLayer {...activeLayer} key={activeLayer.layerId} />) }
      <MapHighlightObject geoJson={geoJson} />
    </AnimatedMap>
  );
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