import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings92878Navigator from '../features/Settings92878/navigator';
import UserProfile92871Navigator from '../features/UserProfile92871/navigator';
import Settings92870Navigator from '../features/Settings92870/navigator';
import Settings92868Navigator from '../features/Settings92868/navigator';
import SignIn292866Navigator from '../features/SignIn292866/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings92878: { screen: Settings92878Navigator },
UserProfile92871: { screen: UserProfile92871Navigator },
Settings92870: { screen: Settings92870Navigator },
Settings92868: { screen: Settings92868Navigator },
SignIn292866: { screen: SignIn292866Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
