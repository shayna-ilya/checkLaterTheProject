import styled from 'styled-components/native';
import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack/lib/typescript/src/types';
import { Image, TouchableOpacity } from 'react-native';
import { images } from 'assets';
import { DrawerActions } from '@react-navigation/native';
import { AppText } from 'components/app-text';

const Container = styled.View`
    height: 45px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
`;

const hitSlop = { top: 8, left: 20, right: 20, bottom: 15 };

export const MainScreenHeader: React.FC<StackHeaderProps> = ({ navigation }) => {
    // TODO: translation

    const handleMenuButtonPress = React.useCallback(() => navigation.dispatch(DrawerActions.openDrawer()), [navigation]);

    return (
        <Container>
            <TouchableOpacity onPress={handleMenuButtonPress} hitSlop={hitSlop}>
                <Image source={images.icons.menu} />
            </TouchableOpacity>
            <AppText>Explore</AppText>
            <TouchableOpacity hitSlop={hitSlop}>
                <Image source={images.icons.search} />
            </TouchableOpacity>
        </Container>
    );
};
