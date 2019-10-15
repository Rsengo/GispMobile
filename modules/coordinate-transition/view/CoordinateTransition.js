import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as controlsActions } from '../../map-controls';
import { actions as mapActions } from '../../map';
import { View } from 'react-native';
import { Dialog, Button, Portal, Chip } from 'react-native-paper';
import { BottomSheet } from '../../bottom-sheet';
import styles from './CoordinateTransition.styles';
import CoordinateInputsMetric from './inputs/CoordinateInputs.Metric';
import CoordinateInputsDegree from './inputs/CoordinateInputs.Degree';

const CoordinateTransition = ({ 
    spatialReferences, 
    coordinateTransitionDialogIsOpened,
    openCoordinateTransitionDialog
}) => (
    <BottomSheet 
        isOpen={coordinateTransitionDialogIsOpened}
        onClose={() => openCoordinateTransitionDialog(false)}
    >
        <CoordinateTransitionContent 
            spatialReferences={spatialReferences} 
        />
    </BottomSheet>
);

const CoordinateTransitionContent = ({ spatialReferences, coordinateTransition }) => {
    if (!spatialReferences || !spatialReferences.length){
        return null;
    }

    const [state, setState] = React.useState({
        selectorVisible: false,
        selectedCRS: spatialReferences[0]
    });
    const { selectorVisible, selectedCRS } = state;
    const { type } = selectedCRS;
    const metric = type === 'metric';
    const openBtnName = selectedCRS ? selectedCRS.name : 'Система координат';

    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <CoordinateTransitionSelector 
                    openSelector={() => setState({ ...state, selectorVisible: true })}
                    label={openBtnName}
                />
                { 
                    metric 
                        ? <CoordinateInputsMetric /> 
                        : <CoordinateInputsDegree /> 
                }
                <CoordinateTransitionControls  
                    showOnMap={() => coordinateTransition({}, selectedCRS)} 
                /> 
            </View>
            <CrsSelectionDialog 
                visible={selectorVisible}
                onDismiss={() => setState({ ...state, selectorVisible: false })} 
                onSelect={(crs) => setState({ ...state, selectedCRS: crs, selectorVisible: false })}
                items={spatialReferences}
                selectedItem={selectedCRS}
            />
        </View>
    );
}

const CoordinateTransitionSelector = ({ openSelector, label }) => (
    <View style={styles.selector}>
        <Button 
            mode='text'
            onPress={openSelector}
        >
            {label}
        </Button>
    </View>
)

const CoordinateTransitionControls = ({ showOnMap }) => (
    <View style={styles.controls}>
        <Button 
            mode="outlined" 
            onPress={showOnMap}
        >
            Перейти
        </Button>
    </View>
);

const CrsSelectionDialog = ({
    visible, 
    onDismiss, 
    onSelect,
    items,
    selectedItem
}) => {
    return (
        <Portal>
            <Dialog
                visible={visible}
                onDismiss={onDismiss}
            >
                <Dialog.Title>Выбор системы координат</Dialog.Title>
                <Dialog.Content>
                {
                    items.map(item => {
                        const { name, id } = item;
                        return (
                            <Chip 
                                key={id}
                                selected={selectedItem.id === id}
                                onPress={() => onSelect(item)}
                            >
                                {name}
                            </Chip>
                        );
                    })
                }
                </Dialog.Content>
            </Dialog>
        </Portal>
      );
}

const mapStateToProps = ({ root, controls }) => {
    const { spatialReferences } = root;
    const { coordinateTransitionDialogIsOpened } = controls;

    return {
        spatialReferences,
        coordinateTransitionDialogIsOpened
    };
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...controlsActions,
        ...mapActions
    };

    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoordinateTransition);