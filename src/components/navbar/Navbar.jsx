import { Moon, Sun, MenuIcon, PanelLeftClose } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

import "./navbar.css";

const navItems = [
  { name: "about", link: "#about" },
  { name: "skills", link: "#skills" },
  { name: "project", link: "#project" },
  { name: "contact", link: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //get the current theme from context,{localStorage}
  const { theme, toggleTheme } = useContext(ThemeContext);
  //EN : JP language toggle
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "jp" : "en");
  };

  //scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //local body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="nav-logo">
            <button className="logo-menu" onClick={toggleMenu}>
              <MenuIcon />
            </button>

            <span className="logo-text1">{t("My")}</span>
            <span className="logo-text2">{t("second")}</span>
          </div>

          {/* Desktop menu */}
          <ul className="nav-menu-desktop">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <a href={item.link} className="nav-link">
                  {t(item.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="toggle-buttons">
          <button
            className="nav-toggle-btn toggle-lng"
            onClick={toggleLanguage}
          >
            {t("language.toggle")}
          </button>

          <button className="nav-toggle-btn " onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`mobile-menu ${isOpen ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <div className="mobile-logo">Brand</div>
            <button
              className="mobile-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <PanelLeftClose />
            </button>
          </div>

          <ul className="mobile-nav-menu">
            {navItems.map((item) => (
              <li className="mobile-nav-item" key={item.name}>
                <a
                  href={item.link}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
