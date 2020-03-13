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
import { Setting } from 'screens/setting';
import { AppearanceSettingsScreen } from '../screens/setting/appearance-settings';

const MainStack = createStackNavigator();

const MainStackNavigator = () => (
    <MainStack.Navigator>
        <MainStack.Screen name={ROUTES.mainScreen} options={{ header: MainScreenHeader }} component={MainScreen} />
        <MainStack.Screen name={ROUTES.listScreen} component={ListScreen} />
        <MainStack.Screen name={ROUTES.addScreen} component={AddScreen} />
    </MainStack.Navigator>
);

const SettingStack = createStackNavigator();

const SettingStackNavigator = () => (
    <SettingStack.Navigator>
        <SettingStack.Screen name={ROUTES.settingScreen} options={{ header: () => null }} component={Setting} />
        <SettingStack.Screen name={ROUTES.appearanceSettingsScreen} options={{ header: () => null }} component={AppearanceSettingsScreen} />
    </SettingStack.Navigator>
);

const Drawer = createDrawerNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={ROUTES.mainStack} drawerContent={(props) => <DrawerContent {...props} />} lazy drawerType="slide">
                <Drawer.Screen name={ROUTES.mainStack} component={MainStackNavigator} />
                <Drawer.Screen name={ROUTES.settingStack} component={SettingStackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
