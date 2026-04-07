// components/Navbar.js
import { Moon, Sun, MenuIcon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const navItems = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "project", href: "#project" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme} = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'jp' : 'en';
    i18n.changeLanguage(newLang);
  };

  console.log(theme)

  return (
    <nav>
      <div className="menu"><MenuIcon /></div>
      <div className="nav-logo">
        <span className="first">{t('RAJAL')}</span>
        <span className="second">{t('second')}</span>
      </div>

      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="nav-items">
            {t(item.name)}
          </a>
        ))}
      </div>

      <div className="nav-button" >
        {/* Language Toggle Button */}
        <button onClick={toggleLanguage}>
          {t('language.toggle')}
        </button>
        
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
}