import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SignInScreen } from 'screens/sign-in';
import { SignUpScreen } from 'screens/sign-up';
import { ROUTES } from 'navigation/route-names';

const AuthStack = createStackNavigator({
    [ROUTES.signInScreen]: SignInScreen,
    [ROUTES.signUpScreen]: SignUpScreen,
});

const RootNavigation = createSwitchNavigator(
    {
        [ROUTES.authStack]: AuthStack,
    },
    {
        initialRouteName: ROUTES.authStack,
    },
);

export const Navigation = createAppContainer(RootNavigation);
