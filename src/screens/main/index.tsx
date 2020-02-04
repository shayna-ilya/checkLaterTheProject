import React from 'react';
import styled from 'styled-components/native';

import { ScrollView } from 'react-native';
import { dataArray } from 'constants';
import { TextInput } from 'components/text-input';
import { TypeCarousel } from 'components/type-carousel';

const Container = styled.View`
    margin-left: 25px;
`;

export const MainScreen: React.FC = () => {
    const movies = React.useMemo(() => dataArray.filter((item) => item.type === 'movie'), []);
    const books = React.useMemo(() => dataArray.filter((item) => item.type === 'book'), []);
    const games = React.useMemo(() => dataArray.filter((item) => item.type === 'game'), []);

    return (
        <Container>
            <ScrollView>
                <TextInput placeholder="Search" />
                <TypeCarousel title="Films" data={movies} />
                <TypeCarousel title="Books" data={books} />
                <TypeCarousel title="Games" data={games} />
            </ScrollView>
        </Container>
    );
};
