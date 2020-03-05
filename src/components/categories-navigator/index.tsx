import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { Category } from 'components/categories-navigator/category';

type Props = {};

// TODO:
const categories = ['will watch', 'watched', 'favorite', 'all'];

export const CategoriesNavigator: React.FC<Props> = (props) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = React.useState<number>(0);

    const handleCategoryPress = React.useCallback((index: number) => setActiveCategoryIndex(index), []);

    const renderItem = React.useCallback(
        (item: ListRenderItemInfo<string>) => {
            return <Category index={item.index} isActive={activeCategoryIndex === item.index} title={item.item} onPress={handleCategoryPress} />;
        },
        [activeCategoryIndex, handleCategoryPress],
    );

    const keyExtractor = React.useCallback((item: string, index: number) => item, []);

    return (
        <View>
            <FlatList showsHorizontalScrollIndicator={false} keyExtractor={keyExtractor} horizontal={true} data={categories} renderItem={renderItem} />
        </View>
    );
};
