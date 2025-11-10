// src/components/Footer/Footer.js
// ATUALIZADO: Removida a seção "Links Rápidos"

// Import React for creating the component
import React from "react";
// Import the CSS file for styling this specific component
import "./Footer.css"; 
// Import the useTranslation hook from react-i18next for internationalization
import { useTranslation } from "react-i18next";

/**
 * Footer Component
 * 
 * This component renders the footer section of the website.
 * It includes copyright information and contact information.
 * 
 * Styling:
 * - Uses Footer.css for specific styles.
 * - Leverages global CSS variables for colors and fonts from App.css to maintain consistency.
 * - The design aims for a clean, informative, and chic appearance.
 * 
 * Internationalization:
 * - Uses the `useTranslation` hook to fetch translated strings for all textual content within the footer,
 *   including section titles, descriptions, and copyright notice.
 * - Dynamic values like the current year for the copyright notice are handled within the component
 *   and can be passed to the translation function (e.g., t("footer.copyright", { year: currentYear })).
 */
const Footer = () => {
  // Initialize the useTranslation hook to access the t function for translations
  const { t } = useTranslation();
  // Get the current year to display in the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    // The main container for the footer section
    <footer className="footer-container">
      {/* Wrapper for the main content of the footer, now with 2 columns instead of 3 */}
      <div className="footer-content">
        {/* Footer Section: About Us */}
        <div className="footer-section about-us">
          {/* Title for the About Us section, translated */}
          <h4>{t("footer.about.title")}</h4>
          {/* Description for the About Us section, translated */}
          <p>{t("footer.about.description")}</p>
        </div>

        {/* REMOVIDO: Footer Section: Quick Links (linhas 47-59 do arquivo original) */}

        {/* Footer Section: Contact Information */}
        <div className="footer-section contact-info">
          {/* Title for the Contact Info section, translated */}
          <h4>{t("footer.contact.title")}</h4>
          {/* Contact email, translated. The email address itself is passed as an interpolation variable. */}
          <p>{t("footer.contact.email", { email: "novaatlastravels@gmail.com" })}</p>
          {/* Contact phone number, translated. The phone number is passed as an interpolation variable. */}
          <p>{/*t("footer.contact.phone", { phone: "+1 234 567 8900" })*/}</p>
          {/* Placeholder for social media icons, which can be added as needed */}
        </div>
      </div>

      {/* Footer Bottom: Copyright Information */}
      <div className="footer-bottom">
        {/* Copyright notice, translated. The current year is passed as an interpolation variable. */}
        <p>{t("footer.copyright", { year: currentYear })}</p>
      </div>
    </footer>
  );
};

// Export the Footer component for use in App.js or other parent components
export default Footer;