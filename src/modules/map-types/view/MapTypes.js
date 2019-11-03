import React from 'react';
import { Dialog } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { actions as controlsActions } from '../../controls';
import { actions as mapActions } from '../../map';
import entries from './MapTypes.entries';
import MapTypesContent from './MapTypes.Content';

class MapTypes extends React.Component {
    selectItem = (type) => {
        const { onClose, onSelect } = this.props;
        
        onSelect(type);
        onClose();
    }

    render() {
        const { isVisible, onClose, mapType, t } = this.props;
        return(
            <Dialog
                visible={isVisible}
                onDismiss={onClose}
            >
                <Dialog.Title>{t('mapTypes.dialog.title')}</Dialog.Title>
                <Dialog.Content>
                    <MapTypesContent 
                        mapType={mapType} 
                        entries={entries} 
                        selectItem={this.selectItem} 
                    />
                </Dialog.Content>
            </Dialog>
        );
    }
};

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

export default compose(
    connect(mapStateToProps, mapDipatchToProps),
    withTranslation()
)(MapTypes);