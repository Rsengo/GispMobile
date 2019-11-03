import React from 'react';
import { default as ReanimatedBottomSheet } from 'reanimated-bottom-sheet';
import Header from './BottomSheet.Header';
import Content from './BottomSheet.Content';
import { DefaultSnapPoints } from '../data/BottomSheet.constants';

const DefaultSnapPoints = ['70%', '30%', 0];

const BottomSheet = ({ 
  renderContent, // invalid
  children, scrollable, isOpen, onClose, snapPoints, // custom
  initialSnap, onCloseEnd, renderHeader, enabledContentGestureInteraction, // rewrite props
  enabledInnerScrolling, enabledContentTapInteraction, // rewrite props
  ...bsProps // forwarding props
}) => {
  const bsRef = React.useRef();

  React.useEffect(() => {
    const points = snapPoints || DefaultSnapPoints;

    if (isOpen) {
      bsRef.current.snapTo(0);
    } else {
      bsRef.current.snapTo(points.length - 1);
    }
  }, [isOpen]);

  return (
    <ReanimatedBottomSheet
      renderHeader={renderHeader || Header}
      renderContent = {() => 
        <Content scrollable={scrollable}>{children}</Content>
      }
      snapPoints = {snapPoints || DefaultSnapPoints}
      ref={bsRef}
      onCloseEnd={onClose}
      enabledContentGestureInteraction={enabledContentGestureInteraction || false}
      enabledInnerScrolling={enabledInnerScrolling || true}
      enabledContentTapInteraction={enabledContentTapInteraction || false}
      initialSnap={initialSnap || 0}
      {...bsProps}
    />
  );
};

export default BottomSheet;