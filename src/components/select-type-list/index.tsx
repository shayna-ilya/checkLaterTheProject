import React from 'react';
import { SelectTypeItem } from 'components/select-type-list/select-type-item';
import styled from 'styled-components/native';
import { types } from 'app-constants';
import { Type } from 'types/main-screen';

type Props = {
    activeType: Type;
    setActiveType(type: Type): void;
};

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const StyledSelectTypeItem = styled(SelectTypeItem)`
    margin: 0 8px 0 8px;
`;

export const SelectTypeList: React.FC<Props> = ({ activeType, setActiveType }) => {
    const renderItem = React.useCallback(
        (item: Type, index: number) => <StyledSelectTypeItem onPress={setActiveType} type={item} key={index} isActive={item.name === activeType.name} icon={item.icon} />,
        [activeType, setActiveType],
    );

    const renderIcons = React.useCallback(() => {
        return types.map((item, index) => renderItem(item, index));
    }, [renderItem]);

    return <Container>{renderIcons()}</Container>;
};
