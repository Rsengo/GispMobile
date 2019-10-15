import React from 'react';
import { default as ReanimatedBottomSheet } from 'reanimated-bottom-sheet';
import Header from './BottomSheet.Header';
import Content from './BottomSheet.Content';
import { DefaultSnapPoints } from '../data/BottomSheet.constants';

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
    const { children, scrollable, onClose, snapPoints } = this.props;
    return (
      <ReanimatedBottomSheet
        renderHeader={Header}
        renderContent = {() => 
          <Content scrollable={scrollable}>{children}</Content>
        }
        snapPoints = {snapPoints || DefaultSnapPoints}
        ref={this.bsRef}
        onCloseEnd={onClose}
        enabledContentGestureInteraction={false}
        enabledInnerScrolling={true}
        enabledContentTapInteraction={false}
        initialSnap={0}
      />
    )
  }
}

export default BottomSheet;