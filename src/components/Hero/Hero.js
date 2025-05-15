// src/components/Hero/Hero.js

// Import React for creating the component
import React from "react";
// Import Slider component from react-slick library
import Slider from "react-slick";
// Import CSS for react-slick carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Import the CSS file for styling this specific component
import "./Hero.css"; 
// Import the useTranslation hook from react-i18next for internationalization
import { useTranslation } from "react-i18next";

// ** IMPORT YOUR IMAGES HERE **
// Ensure these images exist in the specified path: src/assets/images/
// If your images have different names or paths, adjust the import statements accordingly.
import heroImage1 from "../../assets/images/hero-background.jpg";
import heroImage2 from "../../assets/images/hero-background2.jpg"; // Assuming you have a second image
import heroImage3 from "../../assets/images/hero-background3.jpg"; // Assuming you have a third image

/**
 * Hero Component with Image Carousel
 * 
 * This component renders the main hero section of the landing page, now featuring an image carousel.
 * It includes a carousel of 3 images with overlaid text content (title and subtitle).
 * 
 * Styling:
 * - Uses Hero.css for specific styles, including carousel customizations.
 * - Leverages global CSS variables for colors and fonts from App.css.
 * - Requires react-slick and slick-carousel to be installed (`npm install react-slick slick-carousel --legacy-peer-deps`).
 * 
 * Internationalization:
 * - Uses the `useTranslation` hook to fetch translated strings for the title and subtitle.
 */
const Hero = () => {
  // Initialize the useTranslation hook to access the t function for translations
  const { t } = useTranslation();

  // Settings for the react-slick carousel
  const carouselSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop slides
    speed: 300, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in ms (3 seconds)
    fade: true, // Use fade effect for transitions (chic look)
    cssEase: "linear", // Easing function for fade
    pauseOnHover: true // Pause autoplay on hover
  };

  // Use the imported images in the carouselImages array
  const carouselImages = [
    { id: 1, src: heroImage1, alt: "Scenic travel destination 1" },
    { id: 2, src: heroImage2, alt: "Scenic travel destination 2" },
    { id: 3, src: heroImage3, alt: "Scenic travel destination 3" }
  ];

  return (
    // The main container for the hero section, identified by id "hero" for navigation
    <section id="hero" className="hero-container hero-carousel-section">
      <Slider {...carouselSettings}>
        {carouselImages.map(image => (
          <div key={image.id} className="carousel-slide">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
      {/* The hero-content div is used to center and style the text content OVER the carousel */}
      <div className="hero-content-overlay">
        {/* The main title of the hero section, translated using t("hero.title") */}
        <h1>{t("hero.title")}</h1>
        {/* The subtitle of the hero section, translated using t("hero.subtitle") */}
        <p>{t("hero.subtitle")}</p>
        {/* Optional: Call to Action Button - ensure it is styled to be visible over images */}
        {/* Example: <button className="hero-cta-button button-global button-primary">{t("hero.cta")}</button> */}
      </div>
    </section>
  );
};

// Export the Hero component for use in App.js or other parent components
export default Hero;

