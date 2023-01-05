import HttpApi from 'i18next-http-backend';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    defaultNS: 'translation',
    fallbackLng: 'en',
    lng: 'en',
  });

/* Provide theme and i18n functionalities to children */
export function I18nProvider(p: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{p.children}</I18nextProvider>;
}
