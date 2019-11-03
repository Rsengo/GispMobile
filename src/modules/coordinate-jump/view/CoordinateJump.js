import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as controlsActions } from '../../controls';
import { actions as mapActions } from '../../map';
import { BottomSheet } from '../../../components';
import Content from './CoordinateJump.Content';
import { compose } from 'recompose';
import { hideIfNoData } from '../../../hoc';

const CoordinateJump = ({ 
    spatialReferences, 
    coordinateJumpDialogIsOpened,
    openCoordinateJumpDialog,
    coordinateJump
}) => (
    <BottomSheet 
        isOpen={coordinateJumpDialogIsOpened}
        onClose={() => openCoordinateJumpDialog(false)}
    >
        <Content 
            spatialReferences={spatialReferences} 
            coordinateJump={coordinateJump} 
            onClose={() => openCoordinateJumpDialog(false)}
        />
    </BottomSheet>
);

const mapStateToProps = ({ coordinateJump, controls }) => {
    const { spatialReferences } = coordinateJump;
    const { coordinateJumpDialogIsOpened } = controls;

    return {
        spatialReferences,
        coordinateJumpDialogIsOpened
    };
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...controlsActions,
        ...mapActions
    };

    return bindActionCreators(actions, dispatch);
}

const hasNoData = ({ spatialReferences }) => (
    !spatialReferences || !spatialReferences.length
);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    hideIfNoData(hasNoData)
)(CoordinateJump);