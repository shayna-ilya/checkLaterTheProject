import { createAction } from 'typesafe-actions';
import { Entry } from 'types/main-screen';
import cuid from 'cuid';
import { images } from 'assets';

const PREFIX = '@entries';

export const addEntry = createAction(`${PREFIX}/ADD_ENTRY`, (entry: Omit<Entry, 'id' | 'img'>) => ({ id: cuid(), img: images.images.ex2, ...entry }))<Entry>();
