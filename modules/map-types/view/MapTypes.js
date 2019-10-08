import React from 'react';
import { Chip, Dialog, Avatar } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as controlsActions } from '../../map-controls';
import { actions as mapActions } from '../../map';
import { MAP_TYPES } from 'react-native-maps';
import styles from './MapTypes.styles';

const entries = [
    { 
        title: 'Спутник', 
        type: MAP_TYPES.SATELLITE,
        img: require('../../../assets/map-types/satellite.png')
    },
    { 
        title: 'Схема', 
        type: MAP_TYPES.STANDARD,
        img: require('../../../assets/map-types/standard.png') 
    },
    { 
        title: 'Без подложки', 
        type: MAP_TYPES.NONE,
        img: null 
    }
];

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
                    {
                        entries.map(entry => {
                            const { title, type, img } = entry;
                            return (
                                <Chip style={styles.chip}
                                    avatar={
                                        <Avatar.Image 
                                            style={styles.avatar} 
                                            size={24} 
                                            source={img} 
                                        />
                                    }
                                    selected={mapType === type}
                                    onPress={() => this.selectItem(type)}
                                >
                                    {title}
                                </Chip>
                            )
                        })
                    }
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
}

const mapDipatchToProps = (dispatch) => {
    const { openMapTypeDialog } = controlsActions;
    const { changeMapType } = mapActions;
    const actions = {
        onSelect: changeMapType,
        onClose: () => openMapTypeDialog(false)
    };

    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDipatchToProps)(MapTypes);