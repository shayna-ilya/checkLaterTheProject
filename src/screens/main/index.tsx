import React from 'react';
import styled from 'styled-components/native';

import { ScrollView } from 'react-native';
import { dataArray } from 'app-constants';
import { TextInput } from 'components/text-input';
import { TypesList } from 'components/types-list';
import { useNavigation } from 'react-navigation-hooks';
import { ROUTES } from 'navigation/route-names';
import { Fab } from 'components/fab';
import { useTranslation } from 'react-i18next';

const Container = styled.View`
    margin-left: 25px;
`;

export const MainScreen: React.FC = () => {
    const { navigate } = useNavigation();
    const { t } = useTranslation('common');

    const movies = React.useMemo(() => dataArray.filter((item) => item.type === 'movie'), []);
    const books = React.useMemo(() => dataArray.filter((item) => item.type === 'book'), []);
    const games = React.useMemo(() => dataArray.filter((item) => item.type === 'game'), []);

    const handleShowAllPress = React.useCallback(() => navigate(ROUTES.listScreen), [navigate]);
    const handleAddButtonPress = React.useCallback(() => navigate(ROUTES.addScreen), [navigate]);

    return (
        <Container>
            <ScrollView>
                <TextInput placeholder="Search" />
                <TypesList handleShowAllPress={handleShowAllPress} title={t('movies')} data={movies} />
                <TypesList handleShowAllPress={handleShowAllPress} title={t('books')} data={books} />
                <TypesList handleShowAllPress={handleShowAllPress} title={t('games')} data={games} />
            </ScrollView>
            <Fab onPress={handleAddButtonPress} />
        </Container>
    );
};
