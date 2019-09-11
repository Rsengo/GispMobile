import * as React from 'react';
import { Appbar as PaperAppbar } from 'react-native-paper';

const Appbar = ({ onBackPress }) => {
    return (
        <PaperAppbar.Header>
            <PaperAppbar.BackAction
                onPress={onBackPress}
            />
        </PaperAppbar.Header>
    );
}

export default Appbar;