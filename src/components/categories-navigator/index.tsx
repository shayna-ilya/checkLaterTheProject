import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { Category } from 'components/categories-navigator/category';

type Props = {};

const categories = ['will watch', 'watched', 'favorite', 'all'];

export const CategoriesNavigator: React.FC<Props> = (props) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = React.useState<number>(0);

    const handleCategoryPress = React.useCallback((index: number) => setActiveCategoryIndex(index), []);

    const renderItem = React.useCallback(
        (item: ListRenderItemInfo<string>) => {
            return <Category key={item.index} index={item.index} isActive={activeCategoryIndex === item.index} title={item.item} onPress={handleCategoryPress} />;
        },
        [activeCategoryIndex, handleCategoryPress],
    );

    return (
        <View>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={categories} renderItem={renderItem} />
        </View>
    );
};
