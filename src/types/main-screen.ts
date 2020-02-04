export type ContentType = 'movie' | 'book' | 'game';

// TODO: come up with a different name
export type AppDataElement = {
    img: any;
    name: string;
    addData: string;
    type: ContentType;
    genre: string;
    category: string;
};
