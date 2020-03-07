import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import { AppText } from 'components/app-text';
import styled from 'styled-components/native';
import { images } from 'assets';
import { DrawerContentItem } from 'components/drawer-content/drawer-content-item';
import { getActiveRouteName } from 'utils/navigation-utils';
import { ROUTES } from 'navigation/route-names';

const DrawerItemsContainer = styled.View``;

const Container = styled.View`
    flex: 1;
    height: 100%;
`;

const AppLogo = styled(AppText)`
    margin-left: 20px;
    margin-top: 15px;
    margin-bottom: 30px;
`;

const StyledDrawerItem = styled(DrawerContentItem)`
    margin-bottom: 5px;
`;

const BottomContainer = styled(DrawerItemsContainer)`
    flex: 1;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: flex-end;
`;

// TODO: translation
export const DrawerContent: React.FC<DrawerContentComponentProps> = ({ state, navigation }) => {
    console.log('state!', getActiveRouteName(state));

    const navigate = React.useCallback((route: string) => () => navigation.navigate(route), [navigation]);

    return (
        <Container>
            <AppLogo weight="bold" size={18}>
                CheckLaterTheProject
            </AppLogo>
            <DrawerItemsContainer>
                <StyledDrawerItem
                    onPress={navigate(ROUTES.mainScreen)}
                    image={images.icons.home}
                    isActive={getActiveRouteName(state) === ROUTES.mainStack || getActiveRouteName(state) === ROUTES.mainScreen}
                    text="Explore"
                />
                <StyledDrawerItem onPress={navigate(ROUTES.listScreen)} image={images.icons.movieType} text="Movies" />
                <StyledDrawerItem onPress={navigate(ROUTES.listScreen)} image={images.icons.bookType} text="Books" />
                <StyledDrawerItem onPress={navigate(ROUTES.listScreen)} image={images.icons.gameType} text="Games" />
                <StyledDrawerItem onPress={navigate(ROUTES.addScreen)} image={images.icons.plusSquare} text="Add" isActive={getActiveRouteName(state) === ROUTES.addScreen} />
            </DrawerItemsContainer>
            <BottomContainer>
                <StyledDrawerItem onPress={navigate(ROUTES.settingStack)} image={images.icons.settings} text="Setting" />
            </BottomContainer>
        </Container>
    );
};
