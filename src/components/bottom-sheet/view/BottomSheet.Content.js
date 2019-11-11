import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { contentStyles as styles } from './BottomSheet.styles';

const Content = ({scrollable, children}) => {
    const Container = scrollable ? ScrollView : View;
    return (
      <Container style={styles.bodyContainer}>{children}</Container>
    );
}

export default Content;