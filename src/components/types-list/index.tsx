import React from 'react';
import { FlatList, ListRenderItemInfo, View, ViewStyle } from 'react-native';
import { Entry } from 'types/main-screen';
import styled from 'styled-components/native';
import { AppText } from 'components/common/app-text';
import { Button } from 'components/common/button';
import { TypesListItem } from 'components/types-list/types-list-item';
import { useSelector } from 'react-redux';
import { getIsImagesEnabled } from 'store/ducks/settings/selectors';
import { TypesListItemColorCard } from 'components/types-list/types-list-item-color-card';

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

const StyledTypesListItem = styled(TypesListItem)`
    margin-right: 15px;
`;

const StyledTypesListItemColorCard = styled(TypesListItemColorCard)`
    margin-right: 15px;
`;

export const TypesList: React.FC<Props> = ({ data, title, handleShowAllPress, style }) => {
    const isImageEnabled = useSelector(getIsImagesEnabled);

    const renderItem = React.useCallback(
        ({ item, index }: ListRenderItemInfo<Entry>) => {
            if (isImageEnabled) {
                return <StyledTypesListItem data={item} index={index} />;
            }
            return <StyledTypesListItemColorCard data={item} index={index} />;
        },
        [isImageEnabled],
    );

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
