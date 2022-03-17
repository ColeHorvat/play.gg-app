import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Dashboard from '../screens/Dashboard';

const SCREENS = {
    Dashboard: {
		screen: Dashboard,
	},
	/* ... Other screens*/
}

const HOME_STACK = createStackNavigator(SCREENS);

export default createAppContainer(HOME_STACK);