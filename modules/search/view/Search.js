import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Appbar } from '../../app-bar';

const Search = ({ navigation }) => {
    return (
        <View>
            <Appbar
                onBackPress={navigation.goBack} 
                title="Результаты поиска"
            />
            <ScrollView>
            </ScrollView>
        </View>
    );
}

export default Search;