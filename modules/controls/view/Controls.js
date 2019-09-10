import React from 'react';
import { FAB, Portal } from 'react-native-paper';
import actions from './Controls.actions';

const Controls = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'cancel' : 'settings'}
        actions={actions}
        onStateChange={() => setOpen(!open)}
       />
    </Portal>
  );
};

export default Controls;