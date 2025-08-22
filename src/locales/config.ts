import { initReactI18next } from 'react-i18next';
import { getEnLang, getEnLangNamespaces, getZhLang, getZhLangNamespaces } from './utils/helper';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      zh: {
        translation: getZhLang(),
        ...getZhLangNamespaces(),
      },
      en: {
        translation: getEnLang(),
        ...getEnLangNamespaces(),
      },
    },
  });

export default i18n;
