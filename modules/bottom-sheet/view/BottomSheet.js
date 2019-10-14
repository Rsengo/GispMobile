import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './BottomSheet.styles';
import { default as ReanimatedBottomSheet } from 'reanimated-bottom-sheet';

const DefaultSnapPoints = ['70%', '30%', 0];

const Header = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
);

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
    const Container = scrollable ? ScrollView : View;
    return (
      <ReanimatedBottomSheet
        renderHeader={Header}
        renderContent = {() => (<Container style={styles.bodyContainer}>{children}</Container>)}
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