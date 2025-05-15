// src/components/Navbar/Navbar.js

// Import React for creating the component
import React from "react";
// Import the CSS file for styling this specific component
import "./Navbar.css"; 
// Import the useTranslation hook from react-i18next for internationalization
import { useTranslation } from "react-i18next";
import logo from '../../assets/images/logo.jpg';


/**
 * Navbar Component
 * 
 * This component renders the main navigation bar for the website.
 * It includes the site logo/brand name, navigation links, and a language switcher.
 * 
 * Styling:
 * - Uses Navbar.css for specific styles.
 * - Leverages global CSS variables defined in App.css for colors and fonts to ensure consistency and easy theming.
 * 
 * Internationalization:
 * - Uses the `useTranslation` hook to fetch translated strings for navigation links and the language switcher button text.
 * - The `toggleLanguage` function handles changing the application's language between English ('en') and Portuguese ('pt').
 */
const Navbar = () => {
  // Initialize the useTranslation hook to access translation functions (t) and i18n instance
  const { t, i18n } = useTranslation();

  /**
   * Toggles the application language.
   * Switches between English ('en') and Portuguese ('pt').
   */
  const toggleLanguage = () => {
    // Determine the new language based on the current language
    const newLang = i18n.language === "en" ? "pt" : "en";
    // Change the language using the i18n instance
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar-container">
      {/* Logo or Brand Name Section */}
      <div className="navbar-logo">
        {/* The brand name is currently hardcoded but could be made dynamic or part of i18n if needed */}
        <img src={logo} alt="Nova Atlas Logo" className="logo-img" />
      </div>

      
       {/* Navigation Links Section */}
      <ul className="navbar-links">
        {/* Each list item represents a navigation link. */}
        {/* The text for each link is fetched using the t() function with a key from the translation JSON files. */}
        <li><a href="#hero">{t("navbar.home")}</a></li>
        <li><a href="#services">{t("navbar.services")}</a></li>
        <li><a href="#testimonials">{t("navbar.testimonials")}</a></li>
        <li><a href="#cta">{t("navbar.contact")}</a></li>
      </ul>

      {/* Language Switcher Section */}
      <div className="navbar-language-switcher">
        {/* Button to toggle the language. The text of the button (e.g., "PT" or "EN") is also translated. */}
        <button onClick={toggleLanguage} className="language-button">
          {t("navbar.languageSwitcher")}
        </button>
      </div>
    </nav>
  );
};

// Export the Navbar component for use in other parts of the application (e.g., App.js)
export default Navbar;

