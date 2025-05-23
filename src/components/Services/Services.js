// src/components/Services/Services.js

// Import React for creating the component
import React from "react";
// Import the CSS file for styling this specific component
import "./Services.css"; 
// Import the useTranslation hook from react-i18next for internationalization
import { useTranslation } from "react-i18next";

/**
 * Services Component
 * 
 * This component displays a list of services offered by Nova Atlas Travels.
 * It typically uses a grid layout to present each service with a title and description.
 * 
 * Styling:
 * - Uses Services.css for specific styles.
 * - Leverages global CSS variables for colors and fonts from App.css.
 * - Each service item can have an optional icon (currently commented out, path needs to be provided).
 * 
 * Internationalization:
 * - Uses the `useTranslation` hook to fetch translated strings for the section title and each service's title and description.
 * - Service data (titles, descriptions) is structured with keys that correspond to entries in the translation JSON files.
 */
const Services = () => {
  // Initialize the useTranslation hook to access the t function for translations
  const { t } = useTranslation();

  // Placeholder data for services. 
  // In a real application, this might come from a CMS or a dedicated data file.
  // Each service object contains keys for its title and description, which are used with the t() function.
  const servicesData = [
    {
      id: 1,
      titleKey: "services.service1.title",
      descriptionKey: "services.service1.description",
      // icon: "path/to/icon1.svg" // Optional: Path to an SVG icon for the service
    },
    {
      id: 2,
      titleKey: "services.service2.title",
      descriptionKey: "services.service2.description",
      // icon: "path/to/icon2.svg"
    }
    
  ];

  return (
    // The main container for the services section, identified by id "services" for navigation
    <section id="services" className="services-container">
      {/* The title of the services section, translated using t("services.title") */}
      <h2 className="services-title">{t("services.title")}</h2>
      {/* Grid container for displaying service items */}
      <div className="services-grid">
        {/* Map through the servicesData array to render each service item */}
        {servicesData.map(service => (
          <div key={service.id} className="service-item">
            {/* Optional: Display an icon if provided in service data */}
            {/* {service.icon && <img src={service.icon} alt={t(service.titleKey)} className="service-icon" />} */}
            
            {/* Title of the service, translated using the titleKey from serviceData */}
            <h3>{t(service.titleKey)}</h3>
            {/* Description of the service, translated using the descriptionKey from serviceData */}
            <p>{t(service.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the Services component for use in App.js or other parent components
export default Services;

