import React from 'react';
import { View } from 'react-native';
import { headerStyles as styles } from './BottomSheet.styles';

const Header = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
);

export default Header;