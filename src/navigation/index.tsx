import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'navigation/route-names';
import { MainScreen } from 'screens/main';
import { ListScreen } from 'screens/list-screen';
import { AddScreen } from 'screens/add-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainScreenHeader } from 'components/main-screen-header';
import { DrawerContent } from 'components/drawer-content';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { SignInScreen } from 'screens/sign-in';
// import { SignUpScreen } from 'screens/sign-up';
// import { ROUTES } from 'navigation/route-names';
// import { ListScreen } from 'screens/list-screen';
// import { MainScreen } from 'screens/main';
// import { AddScreen } from 'screens/add-screen';
//
// const AuthStack = createStackNavigator(
//     {
//         [ROUTES.signUpScreen]: { screen: SignUpScreen, navigationOptions: { header: () => null } },
//         [ROUTES.signInScreen]: { screen: SignInScreen, navigationOptions: { header: () => null } },
//     },
//     {
//         initialRouteKey: ROUTES.signUpScreen,
//     },
// );
//
// const MainStack = createStackNavigator(
//     {
//         [ROUTES.mainScreen]: { screen: MainScreen, navigationOptions: { header: () => null } },
//         [ROUTES.listScreen]: { screen: ListScreen },
//         [ROUTES.addScreen]: { screen: AddScreen },
//     },
//     {
//         initialRouteKey: ROUTES.mainScreen,
//     },
// );
//
// const RootNavigation = createSwitchNavigator(
//     {
//         [ROUTES.authStack]: AuthStack,
//         [ROUTES.mainStack]: MainStack,
//     },
//     {
//         initialRouteName: ROUTES.mainStack,
//     },
// );
//
// export const Navigation = createAppContainer(RootNavigation);

const MainStack = createStackNavigator();

const MainStackNavigator = () => (
    <MainStack.Navigator>
        <MainStack.Screen name={ROUTES.mainScreen} options={{ header: MainScreenHeader }} component={MainScreen} />
        <MainStack.Screen name={ROUTES.listScreen} component={ListScreen} />
        <MainStack.Screen name={ROUTES.addScreen} component={AddScreen} />
    </MainStack.Navigator>
);

const Drawer = createDrawerNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={ROUTES.mainStack} drawerContent={(props) => <DrawerContent {...props} />} lazy drawerType="slide">
                <Drawer.Screen name={ROUTES.mainStack} component={MainStackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
