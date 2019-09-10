import { Root } from '../../root';
import { Layers } from '../../layers';

const navigationComponents = {
    Root: {screen: Root},
    Layers: {screen: Layers},
}

const routes = {
    Root: 'Root',
    Layers: 'Layers'
}

export { routes, navigationComponents };