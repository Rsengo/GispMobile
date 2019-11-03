const buttons = [
    {
        linkedProp: 'layersTreeDialogIsOpened',
        small: true,
        icon: 'layers',
        openMethod: 'openLayersTreeDialog',
        style: 'layers',
        showIfModuleActive: false
    },
    {
        linkedProp: 'mapTypeDialogIsOpened',
        small: true,
        icon: 'map',
        openMethod: 'openMapTypeDialog',
        style: 'map',
        showIfModuleActive: false
    },
    {
        linkedProp: 'searchResultsIsOpened',
        small: true,
        icon: 'search',
        openMethod: 'openSearchResults',
        style: 'search',
        showIfModuleActive: true
    },
    {
        linkedProp: 'coordinateJumpDialogIsOpened',
        small: true,
        icon: 'location-on',
        openMethod: 'openCoordinateJumpDialog',
        style: 'coordinateJump',
        showIfModuleActive: false
    }
];

export default buttons;