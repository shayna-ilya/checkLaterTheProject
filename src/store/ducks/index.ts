import { combineReducers } from 'redux';
import { entriesReducer } from 'store/ducks/entries/reducers';
import { EntriesState } from 'store/ducks/entries/types';

export type Store = {
    entries: EntriesState;
};

export const rootReducer = combineReducers<Store>({
    entries: entriesReducer,
});
