import { createAction } from 'typesafe-actions';

const PREFIX = '@settings';

export const setIsDarkModeEnabled = createAction(`${PREFIX}/SET_IS_DARK_MODE_ENABLED`, (value: boolean) => value)<boolean>();
export const setIsImagesEnabled = createAction(`${PREFIX}/SET_IS_IMAGES_ENABLED`, (value: boolean) => value)<boolean>();
