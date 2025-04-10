import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Amara Clinics",
      contact: "Contact Us",
      // Add more translations here...
    }
  },
  ar: {
    translation: {
      welcome: "مرحبًا بكم في عيادات عمارة",
      contact: "اتصل بنا",
      // Add more translations here...
    }
  }
};

i18n
  .use(LanguageDetector) // detect language from URL
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['path'],
      lookupFromPathIndex: 1
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
