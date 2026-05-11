/**
 * Header.jsx — фиксированная шапка: логотип, ссылки разделов, мобильное меню, корзина с бейджем.
 * родитель (Layout) передаёт функции смены «экрана» через пропсы.
 */
import React, { useState } from "react";
// Импорт SVG
import logo from "../icons/logo.svg";
import logo_search from "../icons/search.svg";
import logo_pack from "../icons/pack.svg";
import "./Header.css";

/**
 * @param {function} onMenuClick — колбэк без аргументов: открыть экран меню (Layout.openMenu)
 * @param {function} onMainClick — открыть главную (hero + specialty)
 * @param {function} onAboutClick — открыть блок «О нас»
 * @param {function} onLocationClick — открыть страницу с картой и адресами
 * @param {function} onOrderClick — открыть страницу заказа / корзину
 * @param {Array} myArray — тот же массив корзины, что в Layout.items (для длины в бейдже)
 */
const Header = ({ onMenuClick, onMainClick, onAboutClick, onLocationClick, onOrderClick, myArray }) => {
  // Локальный UI-state: открыта ли мобильная панель навигации (класс .nav.open в CSS)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Переключатель boolean по клику на иконку «лупа» на малых экранах
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // инверсия предыдущего значения
  };

  /**
   * Обёртка для пунктов меню: сначала навигация (callback из пропсов), затем закрыть моб. меню.
   * @param {function} callback — одна из функций onMainClick, onMenuClick, ...
   */
  const handleLinkClick = (callback) => {
    callback(); // вызываем переданную функцию (из замыкания пропсов)
    setIsMobileMenuOpen(false); // закрыть выпадашку, чтобы не перекрывала новый экран
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* onClick на div */}
        <div className="logo" onClick={onMainClick} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Ballu Logo" className="logo-img" />
          <span className="logo-text">Ballu</span>
        </div>

        {/* Шаблонная строка в className: если меню открыто, добавляется класс open для CSS */}
        <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          {/* Стрелочные функции создают новый обработчик на каждый рендер */}
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
            {/* Короткая оценка условия: если 0 товаров, правый операнд не вычисляется (React &&) */}
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
