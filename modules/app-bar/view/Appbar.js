import * as React from 'react';
import { Appbar as PaperAppbar } from 'react-native-paper';

const Appbar = ({ onBackPress, title }) => {
    return (
        <PaperAppbar.Header>
            <PaperAppbar.BackAction
                onPress={() => onBackPress()}
            />
            <PaperAppbar.Content
                title={title}
            />
        </PaperAppbar.Header>
    );
}

export default Appbar;