import { categories, genres } from 'app-constants';

export type ContentType = 'movie' | 'book' | 'game';

export type Genres = typeof genres[number];
export type Categories = typeof categories[number];

// TODO: come up with a different name
export type AppDataElement = {
    img: any;
    name: string;
    addData: string;
    type: ContentType;
    genre: Genres;
    category: string;
};
