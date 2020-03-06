import styled from 'styled-components/native';
import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack/lib/typescript/src/types';
import { Image, TouchableOpacity } from 'react-native';
import { images } from 'assets';
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

export const MainScreenHeader: React.FC<StackHeaderProps> = (props) => {
    return (
        <Container>
            <TouchableOpacity hitSlop={{ top: 8, left: 15, right: 20, bottom: 15 }}>
                <Image source={images.icons.menu} />
            </TouchableOpacity>
            <AppText>Explore</AppText>
            <TouchableOpacity>
                <Image source={images.icons.search} />
            </TouchableOpacity>
        </Container>
    );
};
