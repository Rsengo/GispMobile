import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as controlsActions, Controls } from '../../map-controls';
import { View } from 'react-native';
import { Provider, Menu, Dialog, Button, Portal } from 'react-native-paper';

const CoordinateTransition = ({ 
    spatialReferences, 
    coordinateTransitionDialogIsOpened,
    openCoordinateTransitionDialog
}) => {
    console.log('isa: ' + coordinateTransitionDialogIsOpened);
    return (
        <Dialog
            visible={coordinateTransitionDialogIsOpened}
            onDismiss={() => openCoordinateTransitionDialog(false)}
        >
            <Dialog.Title>Переход по координатам</Dialog.Title>
            <Dialog.Content>
                <CoordinateTransitionContent 
                    spatialReferences={spatialReferences} 
                />
            </Dialog.Content>
        </Dialog>
    );
}

const CoordinateTransitionContent = ({ spatialReferences }) => {
    const [state, setState] = React.useState({
        selectorVisible: true,
        selectedCRS: spatialReferences[0]
    });
    const { selectorVisible, selectedCRS } = state;
    const { type } = selectedCRS;
    const metric = type === 'metric';

    return (
        <View>
            <CoordinateTransitionCrsSelector 
                visible={selectorVisible}
                onDismiss={() => setState({ ...state, selectorVisible: false })} 
                onOpen={() => setState({ ...state, selectorVisible: true })}
                onSelect={(crs) => setState({ ...state, selectedCRS: crs, selectorVisible: false })}
                items={spatialReferences}
                selectedItem={selectedCRS}
            />
            { 
                metric 
                    ? <CoordinateTransitionMetric /> 
                    : <CoordinateTransitionDegree /> 
            }
            <CoordinateTransitionControls showOnMap={() => {/* TODO */}} /> 
        </View>
    );
}

const CoordinateTransitionMetric = () => {
    return null;
}

const CoordinateTransitionDegree = () => {
    return null;
}

const CoordinateTransitionControls = ({ showOnMap }) => (
    <View>
        <Button 
            mode="outlined" 
            onPress={showOnMap}
        >
            Перейти
        </Button>
    </View>
);

const CoordinateTransitionCrsSelector = ({
    visible, 
    onDismiss, 
    onOpen, 
    onSelect,
    items,
    selectedItem
}) => {
    const openBtnName = selectedItem ? selectedItem.name : 'Система координат';

    return (
        <Portal>
            <View
                style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                <Menu
                    visible={visible}
                    onDismiss={onDismiss}
                    anchor={
                        <Button onPress={onOpen}>{openBtnName}</Button>
                    }
                >
                    {
                        items.map(item => {
                            const { name } = item;
                            return (
                                <Menu.Item  
                                    onPress={() => onSelect(item)} 
                                    title={name}
                                />
                            );
                        })
                    }
                </Menu>
            </View>
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
        ...controlsActions
    };

    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoordinateTransition);