import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { TextInput } from 'components/text-input';
import { TypesList } from 'components/types-list';
import { ROUTES } from 'navigation/route-names';
import { Fab } from 'components/fab';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getBooks, getGames, getMovies } from 'store/ducks/entries/selectors';

const Container = styled(SafeAreaView)`
    padding-left: 25px;
    background: white;
`;

export const MainScreen: React.FC = () => {
    const { navigate } = useNavigation();
    const { t } = useTranslation('common');

    const movies = useSelector(getMovies);
    const books = useSelector(getBooks);
    const games = useSelector(getGames);

    const handleShowAllPress = React.useCallback(() => navigate(ROUTES.listScreen), [navigate]);
    const handleAddButtonPress = React.useCallback(() => navigate(ROUTES.addScreen), [navigate]);

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextInput placeholder="Search" />
                <TypesList handleShowAllPress={handleShowAllPress} title={t('movies')} data={movies} />
                <TypesList handleShowAllPress={handleShowAllPress} title={t('books')} data={books} />
                <TypesList handleShowAllPress={handleShowAllPress} title={t('games')} data={games} />
            </ScrollView>
            <Fab onPress={handleAddButtonPress} />
        </Container>
    );
};
