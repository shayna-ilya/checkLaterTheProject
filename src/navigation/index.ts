import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SignInScreen } from 'screens/sign-in';
import { SignUpScreen } from 'screens/sign-up';
import { ROUTES } from 'navigation/route-names';
import { MainScreen } from '../screens/main';

const AuthStack = createStackNavigator(
    {
        [ROUTES.signUpScreen]: { screen: SignUpScreen, navigationOptions: { header: () => null } },
        [ROUTES.signInScreen]: { screen: SignInScreen, navigationOptions: { header: () => null } },
    },
    {
        initialRouteKey: ROUTES.signUpScreen,
    },
);

const MainStack = createStackNavigator(
    {
        [ROUTES.mainScreen]: { screen: MainScreen, navigationOptions: { header: () => null } },
    },
    {
        initialRouteKey: ROUTES.mainScreen,
    },
);

const RootNavigation = createSwitchNavigator(
    {
        [ROUTES.authStack]: AuthStack,
        [ROUTES.mainStack]: MainStack,
    },
    {
        initialRouteName: ROUTES.authStack,
    },
);

export const Navigation = createAppContainer(RootNavigation);
