import { createStackNavigator, createAppContainer } from 'react-navigation';
import { navigationComponents, initialRouteName } from '../routes/Navigator.routes';

const NavigatorRoutes = createStackNavigator(navigationComponents, { initialRouteName });
const Navigator = createAppContainer(NavigatorRoutes);

export default Navigator;