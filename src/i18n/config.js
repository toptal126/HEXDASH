import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: require('./localization/en/translation.json'),
    },
    esp: {
      translations: require('./localization/esp/translation.json'),
    },
    ar: {
      translations: require('./localization/ar/translation.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en', 'esp', 'ar'];

export default i18n;
