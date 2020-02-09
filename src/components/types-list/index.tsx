import React from 'react';
import { FlatList, View } from 'react-native';
import { AppDataElement } from 'types/main-screen';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';
import { Button } from 'components/button';
import { TypesListItem } from 'components/types-list/types-list-item';

type Props = {
    data: AppDataElement[];
    title: string;
    handleShowAllPress(): void;
};

const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TypesList: React.FC<Props> = ({ data, title, handleShowAllPress }) => {
    const renderCarouselItem = React.useCallback((item: { item: AppDataElement; index: number }) => {
        return <TypesListItem data={item.item} index={item.index} />;
    }, []);

    return (
        <View>
            <TitleContainer>
                <AppText size={17}>{title}</AppText>
                <Button title="Show all" titleSize={13} onPress={handleShowAllPress} titleColor="#6979F8" mode="text" />
            </TitleContainer>
            <FlatList data={data} horizontal showsHorizontalScrollIndicator={false} renderItem={renderCarouselItem} />
        </View>
    );
};
