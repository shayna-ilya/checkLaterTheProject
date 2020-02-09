import React from 'react';
import { Image } from 'react-native';
import { AppDataElement } from 'types/main-screen';
import styled from 'styled-components/native';

type Props = {
    data: AppDataElement;
    index: number;
    onPress?(index: number): void;
};

const Container = styled.TouchableOpacity`
    margin: 0 7px 0 7px;
`;

export const TypesListItem: React.FC<Props> = ({ data, onPress, index }) => {
    const handlePress = React.useCallback(() => onPress && onPress(index), [index, onPress]);

    return (
        <Container onPress={handlePress}>
            <Image source={data.img} />
        </Container>
    );
};
