// components/LanguageSwitcher.js
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  return (
    <div className="language-switcher">
      <button 
        onClick={() => i18n.changeLanguage('en')}
        style={{ 
          fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
          color: i18n.language === 'en' ? 'var(--text-color)' : 'inherit'
        }}
      >
        EN
      </button>
      <span> | </span>
      <button 
        onClick={() => i18n.changeLanguage('jp')}
        style={{ 
          fontWeight: i18n.language === 'jp' ? 'bold' : 'normal',
          color: i18n.language === 'jp' ? 'var(--text-color)' : 'inherit'
        }}
      >
        JP
      </button>
    </div>
  );
}