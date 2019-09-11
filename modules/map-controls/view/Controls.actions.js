import { routes } from '../../navigator';

const getActions = navigation => [
    { icon: 'layers', label: 'Слои', onPress: () => navigation.navigate(routes.Layers) },
    { icon: 'search', label: 'Поиск', onPress: () => navigation.navigate(routes.Search) }
]

export default getActions;