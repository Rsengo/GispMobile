import { batch } from 'react-redux';
import { layerService } from '../../../../services';

import { actions as coordinateJumpActions } from '../../../coordinate-jump';
import { actions as layersActions } from '../../../layers';
import { actions as mapActions } from '../../../map';

const ActionTypes = {
    MAP_MANIFEST_LOAD_SUCCESS: 'root/MAP_MANIFEST_LOAD_SUCCESS',
    MAP_MANIFEST_LOAD_ERROR: 'root/MAP_MANIFEST_LOAD_ERROR',
    MAP_MANIFEST_LOAD_PROCESSING: 'root/MAP_MANIFEST_LOAD_PROCESSING',
};

const loadMapManifest = () => async (dispatch, _, extra) => {
    dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_PROCESSING, payload: true });

    const { api } = extra;
    api.auth.login();
    const { success, data, errorMessage } = await api.map.getMapManifest();

    dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_PROCESSING, payload: false });

    if (success) {
        const { 
            layers, 
            layersTree,
            defaultExtent,
            spatialReferences
        } = data;
        const listSublayers = layerService.getListSublayers(layers, true);
        
        batch(() => {
            dispatch(layersActions.init({ 
                layers, 
                listSublayers, 
                layersTree 
            }));
            dispatch(coordinateJumpActions.init({
                spatialReferences
            }));
            dispatch(mapActions.changeRegion(defaultExtent));
            
            dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_SUCCESS });
        })
    } else {
        dispatch({ type: ActionTypes.MAP_MANIFEST_LOAD_ERROR, payload: errorMessage });
    }
};

export {
    ActionTypes,
    loadMapManifest
}