import { categories, genres } from 'app-constants';
import { ImageSourcePropType } from 'react-native';

export type ContentType = 'movie' | 'book' | 'game';

export type Genre = typeof genres[number];
export type Category = typeof categories[number];
export type Type = { icon: ImageSourcePropType; name: ContentType };

// TODO: come up with a different name
export type Entry = {
    id: string;
    img: any;
    name: string;
    addDate: number;
    type: ContentType;
    genre: Genre;
    category: string;
};
