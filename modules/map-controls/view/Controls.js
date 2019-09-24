import React from 'react';
import { Dialog, Portal, FAB } from 'react-native-paper';
import styles from './Controls.styles';
import { Layers } from '../../layers';

const Controls = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <React.Fragment>
      <Portal.Host>
        <Portal>
          <FAB
            style={styles.fab}
            small
            icon="layers"
            onPress={() => setOpen(true)}
          />
        </Portal>
      </Portal.Host>
      <Portal.Host>
        <Portal>
          <Dialog
            visible={open}
            onDismiss={() => setOpen(false)}
          >
            <Dialog.ScrollArea>
              <Layers />
            </Dialog.ScrollArea>
          </Dialog>
        </Portal>
      </Portal.Host>
    </React.Fragment>
  );
};

export default Controls;