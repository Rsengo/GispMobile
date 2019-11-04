import React from 'react';
import { View } from 'react-native';
import styles from './CoordinateJump.styles';
import Selector from './CoordinateJump.Selector';
import Controls from './CoordinateJump.Controls';
import { CrsSelectionDialog } from '../selection-dialog';
import { CoordinateInputs } from '../inputs';
import { bindActionCreators } from 'redux';

const getInitialState = (spatialReferences) => ({
    selectorVisible: false,
    selectedCRS: spatialReferences[0],
    coordinate: {
        latitude: 0,
        longitude: 0
    }
});

const ActionTypes = {
    CHANGE_SELECTOR_VISIBILITY: 'local/CHANGE_SELECTOR_VISIBILITY',
    CHANGE_SELECTED_CRS: 'local/CHANGE_SELECTED_CRS',
    CHANGE_COORDINATE: 'local/CHANGE_COORDINATE',
}

const reducer = (state=getInitialState(), action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.CHANGE_SELECTOR_VISIBILITY:
            return { ...state, selectorVisible: payload };
        
        case ActionTypes.CHANGE_SELECTED_CRS:
            return { ...state, selectedCRS: payload, selectorVisible: false };

        case ActionTypes.CHANGE_COORDINATE:
            return { ...state, coordinate: payload};
    }
}

const actions = {
    changeSelectorVisibility: (val) => ({
        type: ActionTypes.CHANGE_SELECTOR_VISIBILITY,
        payload: val
    }) ,
    changeSelectedCrs: (crs) => ({
        type: ActionTypes.CHANGE_SELECTED_CRS,
        payload: crs
    }),
    changeCoordinate: (coord) => ({
        type: ActionTypes.CHANGE_COORDINATE,
        payload: coord
    })
}

const Content = ({ spatialReferences, coordinateJump, onClose }) => {
    const initialState = getInitialState(spatialReferences);
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const actions1 = bindActionCreators(actions, dispatch);

    const { 
        selectorVisible, 
        selectedCRS, 
        coordinate
    } = state;
    const { type } = selectedCRS;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <Selector 
                    openSelector={() => actions1.changeSelectorVisibility(false)}
                    label={selectedCRS.name}
                />
                <CoordinateInputs 
                    type={type} 
                    coordinate={coordinate} 
                    onChange={(coord) => actions1.changeCoordinate(coord)} 
                />
                <Controls  
                    showOnMap={() => {
                        coordinateJump(coordinate, selectedCRS);
                        onClose();
                    }} 
                /> 
            </View>
            <CrsSelectionDialog 
                visible={selectorVisible}
                onDismiss={() => actions1.changeSelectorVisibility(false)} 
                onSelect={(crs) => actions1.changeSelectedCrs(crs)}
                items={spatialReferences}
                selectedItem={selectedCRS}
            />
        </View>
    );
}
export default Content;