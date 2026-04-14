// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  // Navbar
  en: {
    translation: {
      language: "JP",
      about: "About",
      skills: "Skills",
      project: "Project",
      contact: "Contact",
      portfolio: "Portfolio",
    },
  },

  jp: {
    translation: {
      language: "EN",
      about: "自己紹介",
      skills: "スキル",
      project: "プロジェクト",
      contact: "連絡",
      portfolio: "ポートフォリオ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
