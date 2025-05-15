// src/components/CTA/CTA.js (Call to Action)

// Import React for creating the component
import React from "react";
// Import the CSS file for styling this specific component
import "./CTA.css"; 
// Import the useTranslation hook from react-i18next for internationalization
import { useTranslation } from "react-i18next";

/**
 * CTA (Call to Action) Component
 * 
 * This component renders a prominent call to action section, encouraging users to take the next step.
 * It typically includes a compelling title, a supportive subtitle, and a clear action button.
 * 
 * Styling:
 * - Uses CTA.css for specific styles.
 * - Leverages global CSS variables for colors and fonts from App.css.
 * - The design aims to be inviting and persuasive, aligning with the chic and sophisticated theme.
 * 
 * Internationalization:
 * - Uses the `useTranslation` hook to fetch translated strings for the title, subtitle, and button text.
 * - All textual content is managed through translation keys for easy localization.
 */
const CTA = () => {
  // Initialize the useTranslation hook to access the t function for translations
  const { t } = useTranslation();

  return (
    // The main container for the CTA section, identified by id "cta" for navigation
    <section id="cta" className="cta-container">
      {/* Content wrapper for the CTA text and button */}
      <div className="cta-content">
        {/* The main title of the CTA section, translated using t("cta.title") */}
        <h2 className="cta-title">{t("cta.title")}</h2>
        {/* The subtitle of the CTA section, translated using t("cta.subtitle") */}
        <p className="cta-subtitle">{t("cta.subtitle")}</p>
        {/* The call to action button. Text is translated using t("cta.button"). */}
        {/* Styling for this button can leverage global button classes from App.css and be extended in CTA.css */}
        <button className="cta-button button-global button-primary">{t("cta.button")}</button>
      </div>
    </section>
  );
};

// Export the CTA component for use in App.js or other parent components
export default CTA;

