import React from 'react';
import { AppDataElement } from 'types/main-screen';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';

type Props = {
    data: AppDataElement;
};

const Container = styled.View``;

export const ContentListItem: React.FC<Props> = ({ data }) => {
    return (
        <Container>
            <AppText>{data.name}</AppText>
        </Container>
    );
};
