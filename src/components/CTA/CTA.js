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
 * It includes a compelling title, a supportive subtitle, and a clear action button that links to Google Forms.
 * 
 * Styling:
 * - Uses CTA.css for specific styles.
 * - Leverages global CSS variables for colors and fonts from App.css.
 * - The design aims to be inviting and persuasive, aligning with the chic and sophisticated theme.
 * 
 * Internationalization:
 * - Uses the `useTranslation` hook to fetch translated strings for the title, subtitle, and button text.
 * - All textual content is managed through translation keys for easy localization.
 * 
 * External Link:
 * - The CTA button links directly to a Google Forms based on the current language.
 * - Portuguese users are directed to the Portuguese form, English users to the English form.
 */
const CTA = () => {
  // Initialize the useTranslation hook to access the t function for translations and i18n instance
  const { t, i18n } = useTranslation();

  // Google Forms URLs for different languages
  const formUrls = {
    pt: "https://forms.gle/JB997kBdM1mb7FBf8", // Portuguese form URL
    en: "https://forms.gle/HaG2KKje7ZHmz2zV8" // Replace with your English form URL when you have it
  };

  // Function to handle button click - opens the appropriate Google Forms in a new tab
  const handleButtonClick = () => {
    // Get current language
    const currentLang = i18n.language;
    
    // Select the appropriate form URL based on language
    // Default to Portuguese form if language is not found or English form is not set
    const formUrl = formUrls[currentLang] || formUrls.pt;
    
    // Open the form in a new tab
    window.open(formUrl, '_blank');
  };

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
        {/* When clicked, it will open the Google Forms in a new tab based on current language */}
        <button 
          className="cta-button button-global button-primary"
          onClick={handleButtonClick}
        >
          {t("cta.button")}
        </button>
      </div>
    </section>
  );
};

// Export the CTA component for use in App.js or other parent components
export default CTA;