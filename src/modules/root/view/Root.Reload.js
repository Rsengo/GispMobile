import React from 'react';
import { View } from 'react-native';
import { reloadStyles as styles } from './Root.styles';
import { Snackbar, Button } from 'react-native-paper';

const RootReload = ({message, onPress}) => {
    const [open, setOpen] = React.useState(true);
    const onDismiss = React.useCallback(() => setOpen(false), []);

    return (
        <View style={styles.reload}>
            {/* TODO: reload, loop, car-engine-start */}
            <Button icon="reload" mode="contained" onPress={onPress} />
            <Snackbar
              visible={open}
              onDismiss={onDismiss}
            >
              {message}
            </Snackbar>
        </View>
    );
};

export default RootReload;