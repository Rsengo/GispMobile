import React from 'react';
import { bindActionCreators } from 'redux';
import { connect, batch } from 'react-redux';
import { actions as controlsActions } from '../controls';
import { actions as mapActions } from '../map';
import entries from './MapTypes.entries';
import MapTypesContent from './MapTypes.Content';
import { BottomSheet } from '../../components';

const MapTypes = ({ 
    isVisible, 
    onClose, 
    onSelect, 
    mapType
}) => {
    const selectItem = React.useCallback((type) => batch(() => {
        onSelect(type);
    }), []);

    return(
        <BottomSheet isOpen={isVisible} onClose={onClose} snapPoints={[150, 0]}>
            <MapTypesContent 
                mapType={mapType} 
                entries={entries} 
                selectItem={selectItem} 
            />
        </BottomSheet>
    );
}

const mapStateToProps = ({ controls, map }) => {
    const { mapTypeDialogIsOpened: isVisible } = controls;
    const { mapType } = map;
    return {
        isVisible,
        mapType
    }
};

const mapDipatchToProps = (dispatch) => {
    const { openMapTypeDialog } = controlsActions;
    const { changeMapType } = mapActions;
    const actions = {
        onSelect: changeMapType,
        onClose: () => openMapTypeDialog(false)
    };

    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDipatchToProps)(MapTypes);