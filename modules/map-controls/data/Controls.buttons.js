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
        linkedProp: 'coordinateTransitionDialogIsOpened',
        small: true,
        icon: 'location', //TODO: map-marker, pin, address-marker, location-on, place, room
        openMethod: 'openCoordinateTransitionDialog',
        style: 'coordinateTransition',
        showIfModuleActive: false
    }
];

export default buttons;