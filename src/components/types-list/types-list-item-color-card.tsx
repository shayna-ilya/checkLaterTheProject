import React from 'react';
import { ViewStyle } from 'react-native';
import { Entry } from 'types/main-screen';
import styled from 'styled-components/native';
import { AppText } from 'components/common/app-text';

type Props = {
    data: Entry;
    index: number;
    onPress?(index: number): void;
    style?: ViewStyle;
};

const Container = styled.TouchableOpacity`
    display: flex;
    justify-content: flex-start;
    background-color: #6979f8;
    width: 180px;
    height: 180px;
    padding: 28px 23px 28px 23px;
`;

const StyledImage = styled.Image`
    width: 150px;
    height: 115px;
    border-radius: 10px;
`;

const DataContainer = styled.View`
    display: flex;
    margin: 10px 5px 0 15px;
    justify-content: space-between;
`;

export const TypesListItemColorCard: React.FC<Props> = ({ data, onPress, index, style }) => {
    const handlePress = React.useCallback(() => onPress && onPress(index), [index, onPress]);

    return (
        <Container style={style} onPress={handlePress}>
            <DataContainer>
                <AppText color="white" numberOfLines={3} size={17}>
                    {data.name}
                </AppText>
                <AppText size={13} color="white">
                    {data.addDate}
                </AppText>
            </DataContainer>
        </Container>
    );
};
