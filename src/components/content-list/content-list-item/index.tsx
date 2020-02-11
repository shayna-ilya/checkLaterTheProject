import React from 'react';
import { AppDataElement } from 'types/main-screen';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';
import { Button } from 'components/button';
import { ViewStyle } from 'react-native';

type Props = {
    style?: ViewStyle;
    data: AppDataElement;
};

const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-color: rgba(228, 228, 228, 0.6);
    border-bottom-width: 1px;
    padding-bottom: 15px;
`;

const ImageContainer = styled.View``;

const ButtonsContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

const RightContainer = styled.View`
    margin-left: 15px;
`;

const Image = styled.Image`
    width: 85px;
    height: 85px;
    border-radius: 5px;
`;

export const ContentListItem: React.FC<Props> = ({ data, style }) => {
    return (
        <Container style={style}>
            <ImageContainer>
                <Image source={data.img} />
            </ImageContainer>
            <RightContainer>
                <AppText>{data.name}</AppText>
                <ButtonsContainer>
                    <Button title="Favorite" mode="text" />
                    <Button title="Finished" mode="text" />
                </ButtonsContainer>
                <AppText>{data.addData}</AppText>
            </RightContainer>
        </Container>
    );
};
