import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        supportedLngs: ['es', 'ca', 'en'],
        interpolation: { escapeValue: false },
        backend: {
            loadPath: '/locales/{{lng}}.json',
        },
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
