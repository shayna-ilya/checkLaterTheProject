import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import Moment from 'moment';
import { ACCEPTED_LANGUAGES } from 'app-constants';
import { en } from './en';
import { ru } from './ru';

const languageDetector = {
    type: 'languageDetector',
    async: false,
    detect: () => {
        const locales = RNLocalize.getLocales();
        let locale = 'en';

        if (locales.length) {
            locale = locales[0].languageCode;
        }

        if (!ACCEPTED_LANGUAGES.includes(locale)) {
            locale = 'en';
        }

        Moment.locale(locale);
        return locale;
    },
    init: () => undefined,
    cacheUserLanguage: () => undefined,
};

const i18nConfig = {
    fallbackLng: 'ru',
    ns: ['common', 'categories', 'genres', 'addScreen'],
    defaultNS: 'common',
    debug: __DEV__,
    interpolation: {
        escapeValue: false,
    },
    react: {
        wait: false,
        bindStore: '',
        bindI18n: 'languageChanged',
        nsMode: 'fallback' as 'fallback',
        useSuspense: false,
    },
    resources: {
        en,
        ru,
    },
};

i18next
    .use(languageDetector as any)
    .use(initReactI18next)
    .init(i18nConfig);

export const i18n = i18next;
