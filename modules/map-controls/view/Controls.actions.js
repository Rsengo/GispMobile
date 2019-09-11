import { routes } from '../../navigator';

const getActions = navigation => [
    { icon: 'layers', label: 'Слои', onPress: () => navigation.push(routes.Layers) },
    { icon: 'search', label: 'Поиск', onPress: () => {} },
]

export default getActions;