import { Moon, Sun, MenuIcon, PanelLeftClose } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContextValue";
import { useTranslation } from "react-i18next";

import "../styles/navbar.css";

const navItems = [
  { name: "about", link: "#about" },
  { name: "skills", link: "#skills" },
  { name: "project", link: "#project" },
  { name: "contact", link: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //get the current theme
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

  //menu-open -> no scroll
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
            <h2 className="logo-text">{t("portfolio")}</h2>
          </div>

          {/* Desktop menu */}
          <ul className="nav-menu-desktop">
            {navItems.map((item) => (
              <li className="nav-items" key={item.name}>
                <a href={item.link} className="nav-link">
                  {t(item.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="toggle-buttons">
          <button
            aria-label="Toggle language"
            className="nav-toggle-btn toggle-lng"
            onClick={toggleLanguage}
          >
            {t("language")}
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
            <h2 className="mobile-logo-text">Profile</h2>

            <button
              className="mobile-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <PanelLeftClose />
            </button>
          </div>

          <hr />
          <ul className="mobile-nav-menu">
            {navItems.map((item) => (
              <li className="mobile-nav-item" key={item.name}>
                <a
                  href={item.link}
                  className="mobile-nav-link"
                  // onClick={() => setIsOpen(false)}
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
