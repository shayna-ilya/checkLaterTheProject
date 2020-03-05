import { images } from 'assets';
import { Entry, Type } from 'types/main-screen';

export const genres = ['actionAdventure', 'scienceFiction', 'historical', 'fantasy', 'drama', 'comedy', 'crime', 'horror'] as const;
export const categories = ['willWatch', 'watched', 'favorite'] as const;
export const ACCEPTED_LANGUAGES = ['ru', 'en'];
export const types: Type[] = [
    { icon: images.icons.bookType, name: 'book' },
    { icon: images.icons.movieType, name: 'movie' },
    { icon: images.icons.gameType, name: 'game' },
];

export const dataArray: Entry[] = [
    {
        id: '1',
        img: images.images.ex1,
        name: 'Exampe1',
        addDate: '21.04.2009',
        type: 'movie',
        genre: 'horror',
        category: 'favorite',
    },
    {
        id: '2',
        img: images.images.ex2,
        name: 'Cool Story',
        addDate: '21.04.2009',
        type: 'movie',
        genre: 'horror',
        category: 'favorite',
    },
    {
        id: '3',
        img: images.images.ex3,
        name: 'Another stuff',
        addDate: '21.04.2009',
        type: 'movie',
        genre: 'horror',
        category: 'favorite',
    },
    {
        id: '4',
        img: images.images.ex1,
        name: 'Game of Thrones',
        addDate: '21.04.2009',
        type: 'movie',
        genre: 'horror',
        category: 'favorite',
    },
    {
        id: '5',
        img: images.images.ex2,
        name: '1984',
        addDate: '21.04.2009',
        type: 'book',
        genre: 'horror',
        category: 'favorite',
    },
    {
        id: '6',
        img: images.images.ex3,
        name: 'brave new world',
        addDate: '21.04.2009',
        type: 'book',
        genre: 'horror',
        category: 'favorite',
    },
    {
        id: '7',
        img: images.images.ex1,
        name: '451 ph',
        addDate: '21.04.2009',
        type: 'book',
        genre: 'horror',
        category: 'favorite',
    },
    {
        id: '8',
        img: images.images.ex2,
        name: 'Fallout',
        addDate: '21.04.2009',
        type: 'game',
        genre: 'horror',
        category: 'favorite',
    },
    {
        id: '9',
        img: images.images.ex3,
        name: 'GTA',
        addDate: '21.04.2009',
        type: 'game',
        genre: 'horror',
        category: 'favorite',
    },
];
