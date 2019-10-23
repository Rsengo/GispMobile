import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as controlsActions } from '../../map-controls';
import { actions as mapActions } from '../../map';
import { BottomSheet } from '../../../components';
import Content from './CoordinateTransition.Content';

const CoordinateTransition = ({ 
    spatialReferences, 
    coordinateTransitionDialogIsOpened,
    openCoordinateTransitionDialog,
    coordinateTransition
}) => (
    <BottomSheet 
        isOpen={coordinateTransitionDialogIsOpened}
        onClose={() => openCoordinateTransitionDialog(false)}
    >
        <Content 
            spatialReferences={spatialReferences} 
            coordinateTransition={coordinateTransition} 
            onClose={() => openCoordinateTransitionDialog(false)}
        />
    </BottomSheet>
);

const mapStateToProps = ({ coordinateTransition, controls }) => {
    const { spatialReferences } = coordinateTransition;
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