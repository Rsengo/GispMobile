import React from 'react';
import { View } from 'react-native';
import styles from './CoordinateTransition.styles';
import Selector from './CoordinateTransition.Selector';
import Controls from './CoordinateTransition.Controls';
import CrsSelectionDialog from '../selection-dialog/view/CrsSelectionDialog';
import CoordinateInputs from '../inputs';

const getInitialState = (spatialReferences) => ({
    selectorVisible: false,
    selectedCRS: spatialReferences[0],
    coordinate: {
        latitude: 0,
        longitude: 0
    }
});

const Content = ({ spatialReferences, coordinateTransition, onClose }) => {
    if (!spatialReferences || !spatialReferences.length){
        return null;
    }

    const initialState = getInitialState(spatialReferences);
    const [state, setState] = React.useState(initialState);

    const { 
        selectorVisible, 
        selectedCRS, 
        coordinate
    } = state;
    const { type } = selectedCRS;
    const openBtnName = selectedCRS ? selectedCRS.name : 'Система координат';

    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <Selector 
                    openSelector={() => setState({ ...state, selectorVisible: true })}
                    label={openBtnName}
                />
                <CoordinateInputs 
                    type={type} 
                    coordinate={coordinate} 
                    onChange={(coord) => setState({ ...state, coordinate: coord })} 
                />
                <Controls  
                    showOnMap={() => {
                        coordinateTransition(coordinate, selectedCRS);
                        onClose();
                    }} 
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
export default Content;