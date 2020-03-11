import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/common/app-text';
import { ImageSourcePropType, ViewProps } from 'react-native';

const Container = styled.TouchableOpacity<{ isActive: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    width: 85%;
    background-color: ${(props) => (props.isActive ? 'rgba(234,227,194,0.68)' : 'transparent')};
`;

const StyledImage = styled.Image`
    margin-right: 15px;
    width: 40px;
    height: 40px;
`;

type Props = {
    image: ImageSourcePropType;
    text: string;
    isActive?: boolean;
    onPress(): void;
    style?: ViewProps;
};

export const DrawerContentItem: React.FC<Props> = ({ image, text, isActive, style, onPress }) => {
    return (
        <Container isActive={!!isActive} onPress={onPress} style={style}>
            <StyledImage source={image} />
            <AppText>{text}</AppText>
        </Container>
    );
};
