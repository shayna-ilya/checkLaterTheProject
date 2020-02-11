import React from 'react';
import { CategoriesNavigator } from 'components/categories-navigator';
import { dataArray } from 'constants';
import { TypesList } from 'components/types-list';
import { ContentList } from 'components/content-list';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

const Container = styled.View`
    background-color: white;
    width: 100%;
    height: 100%;
`;

const StyledTypesList = styled(TypesList)`
    margin-left: 20px;
`;

const StyledContentList = styled(ContentList)`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 30px;
`;

export const ListScreen: React.FC = (props) => {
    return (
        <Container>
            <CategoriesNavigator />
            <ScrollView>
                <StyledTypesList handleShowAllPress={() => console.log()} title="Old" data={dataArray} />
                <StyledContentList />
            </ScrollView>
        </Container>
    );
};
