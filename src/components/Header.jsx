import React, { useState } from "react";
import logo from "../icons/logo.svg";
import logo_search from "../icons/search.svg";
import logo_pack from "../icons/pack.svg";
import "./Header.css"

const Header = ({ onMenuClick, onMainClick, onAboutClick, onLocationClick, onOrderClick, myArray}) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const handleLinkClick = (callback) => {
    callback();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        <div className="logo" onClick={onMainClick} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Ballu Logo" className="logo-img" />
          <span className="logo-text">Ballu</span>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          <p className="nav-link" onClick={() => handleLinkClick(onMainClick)}>Главная</p>
          <p className="nav-link" onClick={() => handleLinkClick(onMenuClick)}>Меню</p>
          <p className="nav-link" onClick={() => handleLinkClick(onAboutClick)}>О нас</p>
          <p className="nav-link" onClick={() => handleLinkClick(onLocationClick)}>Локации</p>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" id="order-mobile-btn" onClick={toggleMobileMenu}>
            <img src={logo_search} alt="Menu" />
          </button>
          <div className="badge-container">
            <button className="icon-btn" onClick={onOrderClick}>
              <img src={logo_pack} alt="Pack" />
            </button>
            {myArray.length > 0 && (
              <span className="badge-count">{myArray.length}</span>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
