import React from 'react';
import { ViewStyle } from 'react-native';
import { Entry } from 'types/main-screen';
import styled from 'styled-components/native';
import { AppText } from 'components/common/app-text';
import _ from 'lodash';

type Props = {
    data: Entry;
    index: number;
    onPress?(index: number): void;
    style?: ViewStyle;
};

const colors = ['#6979F8', '#FF647C', '#4EAEFF', '#BE52F2', '#FFCF5C', '#F2994A', '#00C48C', '#FF98A8'];

const Container = styled.TouchableOpacity<{ backgroundColor: string }>`
    background-color: ${(props) => props.backgroundColor};
    width: 180px;
    height: 180px;
    padding: 28px 23px 30px 23px;
`;

const DataContainer = styled.View`
    height: 100%;
    justify-content: space-between;
    margin: 10px 5px 0 15px;
`;

const BottomContainer = styled.View``;

export const TypesListItemColorCard: React.FC<Props> = ({ data, onPress, index, style }) => {
    const handlePress = React.useCallback(() => onPress && onPress(index), [index, onPress]);

    return (
        <Container backgroundColor={_.sample(colors) as string} style={style} onPress={handlePress}>
            <DataContainer>
                <AppText color="white" numberOfLines={3} size={17}>
                    {data.name}
                </AppText>
                <BottomContainer>
                    <AppText size={13} color="white">
                        {data.addDate}
                    </AppText>
                </BottomContainer>
            </DataContainer>
        </Container>
    );
};
