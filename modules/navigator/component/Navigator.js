import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import navigationComponents from './Navigator.components';
import navigatorOptions from '../options/Navigator.options';

const NavigatorRoutes = createStackNavigator(navigationComponents, navigatorOptions);
const Navigator = createAppContainer(NavigatorRoutes);

export default Navigator;