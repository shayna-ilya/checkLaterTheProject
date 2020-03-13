import { createReducer } from 'typesafe-actions';
import { Action } from 'typesafe-actions/dist/type-helpers';
import produce from 'immer';
import { setIsDarkModeEnabled, setIsImagesEnabled } from 'store/ducks/settings/actions';
import { combineReducers } from 'redux';
import { AppearanceSettings, SettingsState } from 'store/ducks/settings/types';

const appearanceSettingsInitialState: AppearanceSettings = {
    isDarkModeEnabled: false,
    isImagesEnabled: false,
};

const appearanceSettings = createReducer<AppearanceSettings, Action>(appearanceSettingsInitialState)
    .handleAction(setIsDarkModeEnabled, (state, action) =>
        produce(state, (draft) => {
            draft.isDarkModeEnabled = action.payload;
        }),
    )
    .handleAction(setIsImagesEnabled, (state, action) =>
        produce(state, (draft) => {
            draft.isImagesEnabled = action.payload;
        }),
    );

export const settingsReducer = combineReducers<SettingsState>({
    appearance: appearanceSettings,
});
