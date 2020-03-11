import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Entry } from 'types/main-screen';
import styled from 'styled-components/native';

type Props = {
    data: Entry;
    index: number;
    onPress?(index: number): void;
    style?: ViewStyle;
};

const Container = styled.TouchableOpacity`
    width: 150px;
    height: 180px;
`;

const StyledImage = styled.Image`
    width: 150px;
    height: 115px;
    border-radius: 10px;
`;

const shadows = StyleSheet.create({
    itemShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.5,

        elevation: 3,
    },
});

export const TypesListItem: React.FC<Props> = ({ data, onPress, index, style }) => {
    const handlePress = React.useCallback(() => onPress && onPress(index), [index, onPress]);

    return (
        <Container style={[style, shadows.itemShadow]} onPress={handlePress}>
            <StyledImage source={data.img} />
        </Container>
    );
};
