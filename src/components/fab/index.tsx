import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { images } from 'assets';

type Props = {
    onPress(): void;
};

const Container = styled.TouchableOpacity`
    display: flex;
    border-radius: 50px;
    height: 65px;
    width: 65px;
    background-color: #6979f8;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 88%;
    left: 80%;
    border-width: 2px;
    border-color: white;
`;

export const Fab: React.FC<Props> = ({ onPress }) => {
    return (
        <Container onPress={onPress}>
            <Image source={images.icons.plus} />
        </Container>
    );
};
