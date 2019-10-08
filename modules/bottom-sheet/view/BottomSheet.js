import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './BottomSheet.styles';
import Modal, {
  ModalContent,
  SlideAnimation,
} from 'react-native-modals';

const Header = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
);

const animation = new SlideAnimation({
  slideFrom: 'bottom',
});

const BottomSheet = ({ children, scrollable, isOpen, onClose }) => {
  const Container = scrollable ? ScrollView : View;
  return (
    <Modal.BottomModal
      visible={isOpen}
      onTouchOutside={onClose}
      onSwipeOut={onClose}
      height={0.7}
      width={1}
      modalTitle={<Header />}
      modalAnimation={animation}
    >
      <ModalContent
        style={styles.bodyContainer}
      >
        <Container>
          {children}
        </Container>
      </ModalContent>
    </Modal.BottomModal>
  )
};

export default BottomSheet;