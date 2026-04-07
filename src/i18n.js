// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navbar
      "about": "About",
      "skills": "Skills",
      "project": "Project",
      "contact": "Contact",
      "second": "Portfolio",
      
      // Common
      "language.toggle": "JP",
    }
  },
  jp: {
    translation: {
      // Navbar
      "about": "自己紹介",
      "skills": "スキル",
      "project": "プロジェクト",
      "contact": "連絡",
     "second": "ポートフォリオ",
      
      // Common
      "language.toggle": "EN",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;