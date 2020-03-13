import styled from 'styled-components/native';
import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack/lib/typescript/src/types';
import { Image, TouchableOpacity } from 'react-native';
import { images } from 'assets';
import { DrawerActions } from '@react-navigation/native';
import { AppText } from 'components/common/app-text';
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)`
    background-color: white;
    justify-content: center;
    height: 80px;
`;

const Inner = styled.View`
    display: flex;
    flex-direction: row;
    padding: 0 15px 0 15px;
    justify-content: space-between;
    align-items: center;
`;

const hitSlop = { top: 8, left: 20, right: 20, bottom: 30 };

export const MainScreenHeader: React.FC<StackHeaderProps> = ({ navigation }) => {
    // TODO: translation
    const handleMenuButtonPress = React.useCallback(() => navigation.dispatch(DrawerActions.openDrawer()), [navigation]);
    const safe = useSafeArea();

    console.log('safe are', safe);

    return (
        <Container style={{ paddingTop: safe.top, paddingBottom: 0, marginBottom: 0 }}>
            <Inner>
                <TouchableOpacity hitSlop={hitSlop} onPress={handleMenuButtonPress}>
                    <Image source={images.icons.menu} />
                </TouchableOpacity>
                <AppText>Explore</AppText>
                <TouchableOpacity hitSlop={hitSlop}>
                    <Image source={images.icons.search} />
                </TouchableOpacity>
            </Inner>
        </Container>
    );
};
