import { StyleSheet } from 'react-native';

const icon = { 
    marginTop: 5, 
    marginBottom: 5,
    width: 72,
    height: 72,
    borderColor: '#00000030',
    borderWidth: 1,
    borderRadius: 50,
}

const iconSelected = {
    ...icon,
    backgroundColor: '#ffd20070'
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icon,
    iconSelected,
    text: {
        textAlign: 'center',
        width: '100%'
    }
});

export default styles;