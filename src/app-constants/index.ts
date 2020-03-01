import { images } from 'assets';
import { AppDataElement } from 'types/main-screen';

export const genres = ['actionAdventure', 'scienceFiction', 'historical', 'fantasy', 'drama', 'comedy', 'crime', 'horror'] as const;
export const categories = ['willWatch', 'watched', 'favorite'] as const;

export const dataArray: AppDataElement[] = [
    {
        img: images.images.ex1,
        name: 'Exampe1',
        addData: '21.04.2009',
        type: 'movie',
        genre: 'horror',
        category: 'favorite',
    },
    {
        img: images.images.ex2,
        name: 'Cool Stroy',
        addData: '21.04.2009',
        type: 'movie',
        genre: 'horror',
        category: 'favorite',
    },
    {
        img: images.images.ex3,
        name: 'Another stuff',
        addData: '21.04.2009',
        type: 'movie',
        genre: 'horror',
        category: 'favorite',
    },
    {
        img: images.images.ex1,
        name: 'Game of Thrones',
        addData: '21.04.2009',
        type: 'movie',
        genre: 'horror',
        category: 'favorite',
    },
    {
        img: images.images.ex2,
        name: '1984',
        addData: '21.04.2009',
        type: 'book',
        genre: 'horror',
        category: 'favorite',
    },
    {
        img: images.images.ex3,
        name: 'brave new world',
        addData: '21.04.2009',
        type: 'book',
        genre: 'horror',
        category: 'favorite',
    },
    {
        img: images.images.ex1,
        name: '451 ph',
        addData: '21.04.2009',
        type: 'book',
        genre: 'horror',
        category: 'favorite',
    },
    {
        img: images.images.ex2,
        name: 'Fallout',
        addData: '21.04.2009',
        type: 'game',
        genre: 'horror',
        category: 'favorite',
    },
    {
        img: images.images.ex3,
        name: 'GTA',
        addData: '21.04.2009',
        type: 'game',
        genre: 'horror',
        category: 'favorite',
    },
];
