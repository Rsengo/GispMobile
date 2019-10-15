import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as controlsActions } from '../../map-controls';
import { View } from 'react-native';
import { Dialog, Button, Portal, Chip, TextInput } from 'react-native-paper';
import { BottomSheet } from '../../bottom-sheet';
import { metric, degree } from '../data/CoordinateTransition.fields';
import styles from './CoordinateTransition.styles';

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

const CoordinateTransitionContent = ({ spatialReferences }) => {
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
                <Button 
                    style={styles.selector}
                    mode='text'
                    onPress={() => setState({ ...state, selectorVisible: true })}
                >
                    {openBtnName}
                </Button>
                { 
                    metric 
                        ? <CoordinateTransitionMetric /> 
                        : <CoordinateTransitionDegree /> 
                }
                <CoordinateTransitionControls  
                    showOnMap={() => {/* TODO */}} 
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

const CoordinateTransitionMetric = ({style}) => {
    const [state, setState] = React.useState({
        longitude: 0,
        latitude: 0
    });
    const { longitude, latitude } = state;
    return(
        <View style={styles.inputsContainer}>
            <TextInput
                style={styles.input}
                label='Долгота'
                value={longitude}
                keyboardType='decimal-pad'
                onChangeText={longitude => setState({ ...state, longitude })}
            />
            <TextInput
                style={styles.input}
                label='Широта'
                value={latitude}
                keyboardType='decimal-pad'
                onChangeText={latitude => setState({ ...state, latitude })}
            />
        </View>
    );
}

const CoordinateTransitionDegree = () => {
    const [state, setState] = React.useState({
        grad: 0,
        min: 0,
        sec: 0
    });
    const { grad, min, sec } = state;
    return(
        <View style={styles.inputsContainer}>
            <TextInput
                style={styles.input}
                label='Градусы'
                value={grad}
                keyboardType='decimal-pad'
                onChangeText={grad => setState({ ...state, grad })}
            />
            <TextInput
                style={styles.input}
                label='Минуты'
                value={min}
                keyboardType='decimal-pad'
                onChangeText={min => setState({ ...state, min })}
            />
            <TextInput
                style={styles.input}
                label='Секунды'
                value={sec}
                keyboardType='decimal-pad'
                onChangeText={sec => setState({ ...state, sec })}
            />
        </View>
    );
}

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

    console.log('test2: ' + spatialReferences.length )

    return {
        spatialReferences,
        coordinateTransitionDialogIsOpened
    };
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...controlsActions
    };

    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoordinateTransition);