import React from 'react';
import { Dialog } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { connect, batch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { actions as controlsActions } from '../controls';
import { actions as mapActions } from '../map';
import entries from './MapTypes.entries';
import MapTypesContent from './MapTypes.Content';

const MapTypes = ({ 
    isVisible, 
    onClose, 
    onSelect, 
    mapType
}) => {
    const [translate] = useTranslation();

    const selectItem = React.useCallback((type) => batch(() => {
        onSelect(type);
        onClose();
    }), []);

    return(
        <Dialog
            visible={isVisible}
            onDismiss={onClose}
        >
            <Dialog.Title>{translate('mapTypes.dialog.title')}</Dialog.Title>
            <Dialog.Content>
                <MapTypesContent 
                    mapType={mapType} 
                    entries={entries} 
                    selectItem={selectItem} 
                />
            </Dialog.Content>
        </Dialog>
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