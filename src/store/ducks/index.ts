import { combineReducers } from 'redux';
import { entriesReducer } from 'store/ducks/entries/reducers';
import { EntriesState } from 'store/ducks/entries/types';
import { settingsReducer } from 'store/ducks/settings/reducers';
import { SettingsState } from 'store/ducks/settings/types';

export type Store = {
    entries: EntriesState;
    settings: SettingsState;
};

export const rootReducer = combineReducers<Store>({
    entries: entriesReducer,
    settings: settingsReducer,
});
