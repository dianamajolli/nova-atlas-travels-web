// src/components/Testimonials/Testimonials.js

// Import React for creating the component
import React from "react";
// Import the CSS file for styling this specific component
import "./Testimonials.css"; 
// Import the useTranslation hook from react-i18next for internationalization
import { useTranslation } from "react-i18next"; 

/**
 * Testimonials Component
 * 
 * This component displays client testimonials or reviews.
 * It typically uses a grid or slider layout to present each testimonial, including the quote and the author.
 * 
 * Styling:
 * - Uses Testimonials.css for specific styles.
 * - Leverages global CSS variables for colors and fonts from App.css.
 * - The design aims for a chic and trustworthy presentation.
 * 
 * Internationalization:
 * - Uses the `useTranslation` hook to fetch translated strings for the section title, each quote, and author name.
 * - Testimonial data (quotes, authors) is structured with keys that correspond to entries in the translation JSON files.
 */
const Testimonials = () => {
  // Initialize the useTranslation hook to access the t function for translations
  const { t } = useTranslation();

  // Placeholder data for testimonials.
  // In a real application, this data might be fetched from an API or a CMS.
  // Each object contains keys for the quote and author, used with t() for translation.
  const testimonialsData = [
    {
      id: 1,
      quoteKey: "testimonials.quote1",
      authorKey: "testimonials.author1"
    },
    {
      id: 2,
      quoteKey: "testimonials.quote2",
      authorKey: "testimonials.author2"
    },
    {
      id: 3,
      quoteKey: "testimonials.quote3",
      authorKey: "testimonials.author3"
    }
  ];

  return (
    // The main container for the testimonials section, identified by id "testimonials" for navigation
    <section id="testimonials" className="testimonials-container">
      {/* The title of the testimonials section, translated using t("testimonials.title") */}
      <h2 className="testimonials-title">{t("testimonials.title")}</h2>
      {/* Grid container for displaying testimonial items */}
      <div className="testimonials-grid">
        {/* Map through the testimonialsData array to render each testimonial item */}
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            {/* The testimonial quote, translated using the quoteKey from testimonialData */}
            <p className="testimonial-quote">{t(testimonial.quoteKey)}</p>
            {/* The testimonial author, translated using the authorKey from testimonialData */}
            <p className="testimonial-author">- {t(testimonial.authorKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the Testimonials component for use in App.js or other parent components
export default Testimonials;

