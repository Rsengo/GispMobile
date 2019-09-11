import { Main } from '../../main';
import { Layers } from '../../layers';

const navigationComponents = {
    Main: {screen: Main},
    Layers: {screen: Layers},
};

const routes = {
    Main: 'Main',
    Layers: 'Layers'
};

const initialRouteName = routes.Main;

export { routes, navigationComponents, initialRouteName };