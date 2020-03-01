import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';
import { SelectTypeList } from 'components/select-type-list';

const Container = styled.View`
    padding: 0 22px 0 22px;
    width: 100%;
    height: 100%;
    background-color: white;
`;

export const AddScreen: React.FC = () => {
    const [activeType, setActiveType] = React.useState<number>(1);

    return (
        <Container>
            <AppText size={17}>Select type</AppText>
            <SelectTypeList activeType={activeType} setActiveType={setActiveType} />
        </Container>
    );
};
