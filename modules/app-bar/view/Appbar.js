import * as React from 'react';
import { Appbar as PaperAppbar } from 'react-native-paper';

const Appbar = ({ onBackPress, title, subtitle }) => {
    return (
        <PaperAppbar.Header>
            <PaperAppbar.BackAction
                onPress={onBackPress}
            />
            <Appbar.Content
                title={title}
                subtitle={subtitle}
            />
        </PaperAppbar.Header>
    );
}

export default Appbar;