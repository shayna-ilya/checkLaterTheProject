import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';

type Props = {
    title: string;
    onPress(index: number): void;
    isActive?: boolean;
    index: number;
};

const Container = styled.TouchableOpacity`
    width: 108px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ActiveLine = styled.View<{ visible: boolean }>`
    opacity: ${(props) => (props.visible && 1) || 0};
    margin-top: 20px;
    height: 5px;
    width: 100%;
    background-color: #6979f8;
`;

export const Category: React.FC<Props> = ({ title, onPress, isActive = false, index }) => {
    const handlePress = React.useCallback(() => onPress(index), [index, onPress]);

    return (
        <Container onPress={handlePress}>
            <AppText size={13} color={isActive ? '#6979F8' : '#999999'} font="textRegular" transform="uppercase">
                {title}
            </AppText>
            <ActiveLine visible={isActive} />
        </Container>
    );
};
