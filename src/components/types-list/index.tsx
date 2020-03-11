import React from 'react';
import { FlatList, ListRenderItemInfo, View, ViewStyle } from 'react-native';
import { Entry } from 'types/main-screen';
import styled from 'styled-components/native';
import { AppText } from 'components/common/app-text';
import { Button } from 'components/common/button';
import { TypesListItem } from 'components/types-list/types-list-item';

type Props = {
    data: Entry[];
    title: string;
    handleShowAllPress(): void;
    style?: ViewStyle;
};

const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TypesList: React.FC<Props> = ({ data, title, handleShowAllPress, style }) => {
    const renderItem = React.useCallback(({ item, index }: ListRenderItemInfo<Entry>) => {
        return <TypesListItem data={item} index={index} />;
    }, []);

    const keyExtractor = React.useCallback((item: Entry, index: number) => index.toString(), []);

    return (
        <View style={style}>
            <TitleContainer>
                <AppText size={17}>{title}</AppText>
                <Button title="Show all" titleSize={13} onPress={handleShowAllPress} titleColor="#6979F8" mode="text" />
            </TitleContainer>
            <FlatList data={data} horizontal keyExtractor={keyExtractor} showsHorizontalScrollIndicator={false} renderItem={renderItem} />
        </View>
    );
};
