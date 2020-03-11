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
    width: 150px;
    height: 180px;
    border-radius: 10px;
    border-width: 1px;
    border-color: rgba(228, 228, 228, 0.6);
`;

const StyledImage = styled.Image`
    width: 150px;
    height: 115px;
    border-radius: 10px;
`;

const DataContainer = styled.View`
    display: flex;
    margin: 10px 5px 0 15px;
    justify-content: center;
    align-items: flex-start;
`;

export const TypesListItem: React.FC<Props> = ({ data, onPress, index, style }) => {
    const handlePress = React.useCallback(() => onPress && onPress(index), [index, onPress]);

    return (
        <Container style={style} onPress={handlePress}>
            <StyledImage source={data.img} />
            <DataContainer>
                <AppText numberOfLines={1} size={17}>
                    {data.name}
                </AppText>
                <AppText size={13} color="#999999">
                    {data.addDate}
                </AppText>
            </DataContainer>
        </Container>
    );
};
