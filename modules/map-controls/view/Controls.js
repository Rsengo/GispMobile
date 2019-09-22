import React from 'react';
import { FAB, Portal } from 'react-native-paper';
import getActions from './Controls.actions';
import styles from './Controls.styles';

const Controls = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Portal.Host>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'cancel' : 'settings'}
          actions={getActions(navigation)}
          fabStyle={styles.fab}
          onStateChange={() => setOpen(!open)}
        />
      </Portal>
    </Portal.Host>
  );
};

export default Controls;