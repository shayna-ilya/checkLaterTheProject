import React from 'react';
import styled from 'styled-components/native';

import { ScrollView } from 'react-native';
import { dataArray } from 'constants';
import { TextInput } from 'components/text-input';
import { TypesList } from 'components/types-list';
import { useNavigation } from 'react-navigation-hooks';
import { ROUTES } from 'navigation/route-names';

const Container = styled.View`
    margin-left: 25px;
`;

export const MainScreen: React.FC = () => {
    const { navigate } = useNavigation();

    const movies = React.useMemo(() => dataArray.filter((item) => item.type === 'movie'), []);
    const books = React.useMemo(() => dataArray.filter((item) => item.type === 'book'), []);
    const games = React.useMemo(() => dataArray.filter((item) => item.type === 'game'), []);

    const handleShowAllPress = React.useCallback(() => navigate(ROUTES.listScreen), [navigate]);

    return (
        <Container>
            <ScrollView>
                <TextInput placeholder="Search" />
                <TypesList handleShowAllPress={handleShowAllPress} title="Films" data={movies} />
                <TypesList handleShowAllPress={handleShowAllPress} title="Books" data={books} />
                <TypesList handleShowAllPress={handleShowAllPress} title="Games" data={games} />
            </ScrollView>
        </Container>
    );
};
