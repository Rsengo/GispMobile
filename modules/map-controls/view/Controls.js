import React from 'react';
import { FAB, Portal } from 'react-native-paper';
import getActions from './Controls.actions';
import styles from './Controls.styles'

const Controls = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'cancel' : 'settings'}
        fabStyle={styles.fab}
        actions={getActions(navigation)}
        onStateChange={() => setOpen(!open)}
       />
    </Portal>
  );
};

export default Controls;