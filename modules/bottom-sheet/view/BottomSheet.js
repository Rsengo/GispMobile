import React from 'react';
import { View } from 'react-native';
import { default as ReanimatedBottomSheet } from 'reanimated-bottom-sheet';
import styles from './BottomSheet.styles';

const Header = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
);

class BottomSheet extends React.Component {
  bs = React.createRef()

  render() {
    const { children } = this.props;

    return (
        <ReanimatedBottomSheet
          ref={this.bs}
          snapPoints={[600, 180, 0]}
          renderContent={() => (<View>{children}</View>)}
          renderHeader={Header}
          initialSnap={1}
          enabledContentGestureInteraction={false}
          enabledInnerScrolling={true}
          enabledContentTapInteraction={false}
        />
    )
  }
}

export default BottomSheet;