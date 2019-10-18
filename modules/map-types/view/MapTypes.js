import React from 'react';
import { Dialog } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as controlsActions } from '../../map-controls';
import { actions as mapActions } from '../../map';
import { entries } from '../data/MapTypes.constants';
import Content from './MapTypes.Content';

class MapTypes extends React.Component {
    selectItem = (type) => {
        const { onClose, onSelect } = this.props;
        
        onSelect(type);
        onClose();
    }

    render() {
        const { isVisible, onClose, mapType } = this.props;
        return(
            <Dialog
                visible={isVisible}
                onDismiss={onClose}
            >
                <Dialog.Title>Тип карты</Dialog.Title>
                <Dialog.Content>
                    <Content mapType={mapType} entries={entries} selectItem={this.selectItem} />
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

export default connect(mapStateToProps, mapDipatchToProps)(MapTypes);