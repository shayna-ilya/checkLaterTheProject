import { Store } from 'store/ducks/index';

export const getIsImagesEnabled = (store: Store) => store.settings.appearance.isImagesEnabled;
export const getIsDarkModeEnable = (store: Store) => store.settings.appearance.isDarkModeEnabled;
