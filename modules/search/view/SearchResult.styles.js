const styles = {
    container: {
        position: 'absolute', 
        bottom: 5
    },
    itemContainer: {
        display: 'flex', 
        flexDirection: 'column',
        width: '100%', 
        height: '100%',
        backgroundColor: '#fff',
        paddingRight: 15, 
        paddingLeft: 15, 
        paddingTop: 5, 
        paddingBottom: 5
    },
    itemContent: {
        display: 'flex', 
        flexDirection:'column', 
        justifyContent: 'flex-start', 
        flex: 1
    },
    itemActions: {
        display: 'flex', 
        flexDirection:'column', 
        justifyContent: 'flex-end', 
        flex: 1
    }
}

export default styles;