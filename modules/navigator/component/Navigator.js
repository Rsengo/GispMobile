import { createStackNavigator, createAppContainer } from 'react-navigation';
import { navigationComponents } from '../routes/Navigator.routes';

const NavigatorRoutes = createStackNavigator(navigationComponents);
const Navigator = createAppContainer(NavigatorRoutes);

export default Navigator;