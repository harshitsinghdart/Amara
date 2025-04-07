import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  resources: {
    en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      fr: {
        translation: {
          "Welcome to React": "Bienvenue à React et react-i18next"
        }
    },
  },
});