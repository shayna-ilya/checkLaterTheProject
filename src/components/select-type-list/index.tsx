import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { SelectTypeItem } from 'components/select-type-list/select-type-item';
import { ContentType } from 'types/main-screen';
import { images } from 'assets';
import styled from 'styled-components/native';

type Props = {
    activeType: number;
    setActiveType(type: number): void;
};

type Type = { icon: ImageSourcePropType; type: ContentType };

const types: Type[] = [
    { icon: images.icons.bookType, type: 'book' },
    { icon: images.icons.movieType, type: 'movie' },
    { icon: images.icons.gameType, type: 'game' },
];

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
        (item: Type, index: number) => <StyledSelectTypeItem onPress={setActiveType} index={index} key={index} isActive={index === activeType} icon={item.icon} />,
        [activeType],
    );

    const renderIcons = React.useCallback(() => {
        return types.map((item, index) => renderItem(item, index));
    }, [renderItem]);

    return <Container>{renderIcons()}</Container>;
};
