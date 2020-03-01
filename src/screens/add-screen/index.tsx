import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';
import { SelectTypeList } from 'components/select-type-list';
import { TextInput } from 'components/text-input';

const Container = styled.View`
    padding: 0 22px 0 22px;
    width: 100%;
    height: 100%;
    background-color: white;
`;

const StyledTextInput = styled(TextInput)`
    margin-top: 15px;
`;

export const AddScreen: React.FC = () => {
    const [activeType, setActiveType] = React.useState<number>(1);

    return (
        <Container>
            <AppText size={17}>Select type</AppText>
            <SelectTypeList activeType={activeType} setActiveType={setActiveType} />
            <StyledTextInput label="Name" labelTextTransform="capitalize" />
            <StyledTextInput label="Genre" listMode labelTextTransform="capitalize" />
            <StyledTextInput label="Category" listMode labelTextTransform="capitalize" />
        </Container>
    );
};
