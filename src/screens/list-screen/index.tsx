import React from 'react';
import { CategoriesNavigator } from 'components/categories-navigator';
import { dataArray } from 'constants';
import { TypesList } from 'components/types-list';
import { ContentList } from 'components/content-list';

export const ListScreen: React.FC = (props) => {
    return (
        <>
            <CategoriesNavigator />
            <TypesList handleShowAllPress={() => console.log()} title="Old" data={dataArray} />
            <ContentList />
        </>
    );
};
