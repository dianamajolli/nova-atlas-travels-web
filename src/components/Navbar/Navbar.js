// Arquivo: src/components/Navbar/Navbar.js (CORRIGIDO)
// Correções aplicadas:
// 1. Caminho do logo alterado de /logo.png para /logo.jpg
// 2. Chaves de tradução corrigidas de "nav.*" para "navbar.*"

import React, { useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* CORREÇÃO 1: Caminho alterado para logo.jpg */}
          <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Nova Atlas Travels" />
        </div>
        
        {/* Botão de menu hamburger para mobile */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="menu-icon">☰</span>
        </div>
        
        {/* Menu de navegação com classe condicional para mostrar/esconder */}
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            {/* CORREÇÃO 2: Chaves de tradução alteradas de "nav.*" para "navbar.*" */}
            <li><a href="#home">{t("navbar.home")}</a></li>
            <li><a href="#services">{t("navbar.services")}</a></li>
            <li><a href="#testimonials">{t("navbar.testimonials")}</a></li>
            <li><a href="#contact">{t("navbar.contact")}</a></li>
          </ul>
          
          <div className="language-selector">
            <button 
              className={i18n.language === "pt" ? "active" : ""} 
              onClick={() => changeLanguage("pt")}
            >
              PT
            </button>
            <button 
              className={i18n.language === "en" ? "active" : ""} 
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;