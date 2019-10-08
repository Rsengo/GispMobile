import React from 'react';
import { Chip, Dialog, Portal } from 'react-native-paper';

const entries = ["1", "2", "3"];

class MapTypes extends React.Component {
    selectItem(type) {
        const { onClose, onSelect } = this.props;
        
        onSelect(type);
        onClose();
    }

    render() {
        const { isVisible, onClose } = this.props;
        return(
            <Portal.Host>
                <Portal>
                    <Dialog
                        visible={isVisible}
                        onDismiss={onClose}
                    >
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                            <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
                        </Dialog.Content>
                    </Dialog>
                </Portal>
            </Portal.Host>
        );
    }
};

export default MapTypes;