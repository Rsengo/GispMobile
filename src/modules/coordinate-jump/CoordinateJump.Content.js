import React from 'react';
import { View } from 'react-native';
import styles from './CoordinateJump.styles';
import CoordinateJumpSelector from './CoordinateJump.Selector';
import CoordinateJumpControls from './CoordinateJump.Controls';
import { CrsSelectionDialog } from './selection-dialog';
import { CoordinateInputs } from './inputs';
import { actions as actionCreators, reducer, initialState } from './local-store';
import { useActions } from '../../hooks';

const CoordinateJumpContent = ({ spatialReferences, coordinateJump, onClose }) => {
    const initState = { ...initialState, selectedCRS: spatialReferences[0] }
    const [state, actions] = useActions(reducer, initState, null, actionCreators);

    const { 
        selectorVisible, 
        selectedCRS, 
        coordinate
    } = state;

    const { type } = selectedCRS;

    const closeSelector = React.useCallback(() => actions.changeSelectorVisibility(false), []);
    const openSelector = React.useCallback(() => actions.changeSelectorVisibility(true), []);
    const onCrsSelected = React.useCallback((crs) => actions.changeSelectedCrs(crs), []);
    const onCoordinateChange = React.useCallback((coord) => actions.changeCoordinate(coord), []);
    const showOnMapCallback = React.useCallback(() => {
        coordinateJump(coordinate, selectedCRS);
        onClose();
    }, [coordinate, selectedCRS]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <CoordinateJumpSelector 
                    openSelector={openSelector}
                    label={selectedCRS.name}
                />
                <CoordinateInputs 
                    type={type} 
                    coordinate={coordinate} 
                    onChange={onCoordinateChange} 
                />
                <CoordinateJumpControls  
                    showOnMap={showOnMapCallback}
                /> 
            </View>
            <CrsSelectionDialog 
                visible={selectorVisible}
                onDismiss={closeSelector} 
                onSelect={onCrsSelected}
                items={spatialReferences}
                selectedItem={selectedCRS}
            />
        </View>
    );
}
export default CoordinateJumpContent;