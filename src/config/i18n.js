import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const languages = {
  de: {
    name: 'Deutsch',
    translation: require('../locales/de.json')
  },
  en: {
    name: 'English',
    translation: require('../locales/en.json')
  },
  ja: {
    name: '日本語',
    translation: require('../locales/ja.json')
  },
  // add other languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources: Object.fromEntries(
      Object.entries(languages).map(([code, { translation }]) => [code, { translation }])
    ),
    lng: 'en', // default language to use
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;