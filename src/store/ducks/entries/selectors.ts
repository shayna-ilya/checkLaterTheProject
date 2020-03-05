import { Store } from 'store/ducks/index';
import { createSelector } from 'reselect';

export const getAllEntries = (store: Store) => store.entries.data;

export const getMovies = createSelector(getAllEntries, (entries) => entries.filter((entry) => entry.type === 'movie'));
export const getBooks = createSelector(getAllEntries, (entries) => entries.filter((entry) => entry.type === 'book'));
export const getGames = createSelector(getAllEntries, (entries) => entries.filter((entry) => entry.type === 'game'));
