import React from 'react';
import { default as ReanimatedBottomSheet } from 'reanimated-bottom-sheet';
import Header from './BottomSheet.Header';
import Content from './BottomSheet.Content';
import { DefaultSnapPoints } from '../data/BottomSheet.constants';

const DefaultSnapPoints = ['70%', '30%', 0];

class BottomSheet extends React.Component {
  bsRef = React.createRef();

  componentDidUpdate() {
    const { isOpen, snapPoints } = this.props;
    const points = snapPoints || DefaultSnapPoints;

    if (isOpen) {
      this.bsRef.current.snapTo(0);
    } else {
      this.bsRef.current.snapTo(points.length - 1);
    }
  }

  render() {
    const { 
      renderContent, //invalid
      children, scrollable, onClose, snapPoints, //custom
      initialSnap, onCloseEnd, renderHeader, enabledContentGestureInteraction,
      enabledInnerScrolling, enabledContentTapInteraction, 
      ...bsProps 
    } = this.props;
    return (
      <ReanimatedBottomSheet
        renderHeader={renderHeader || Header}
        renderContent = {() => 
          <Content scrollable={scrollable}>{children}</Content>
        }
        snapPoints = {snapPoints || DefaultSnapPoints}
        ref={this.bsRef}
        onCloseEnd={onClose}
        enabledContentGestureInteraction={enabledContentGestureInteraction || false}
        enabledInnerScrolling={enabledInnerScrolling || true}
        enabledContentTapInteraction={enabledContentTapInteraction || false}
        initialSnap={initialSnap || 0}
        {...bsProps}
      />
    )
  }
}

export default BottomSheet;