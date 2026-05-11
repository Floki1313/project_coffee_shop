/**
 * Footer.jsx — подвал сайта: бренд, описание и три колонки навигационных ссылок.
 * Ссылки частично заглушки (tel).
 */
import React from "react";
// SVG для тёмного фона — отдельный файл от логотипа в шапке
import logo from "../icons/logo-white.svg";
import "./Footer.css";

// Нет пропсов — статичный презентационный компонент
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col info">
          <div className="footer-logo">
            {/* alt у изображения обязателен для скринридеров */}
            <img src={logo} alt="Ballu" />
            <span className="logo-text-footer">Ballu</span>
          </div>
          <p className="footer-description">
            Создаём исключительные кофейные впечатления с 2023 года.
            Обжариваем зёрна свежими каждый день.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Магазин</h4>
          {/* nav — семантика группы ссылок */}
          <nav className="footer-nav">
            <a href="tel:+37296344453">Кофейные зёрна</a>
            <a href="tel:+37296344453">Оборудование</a>
            <a href="tel:+37296344453">Мерч</a>
            <a href="tel:+37296344453">Подписки</a>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">О нас</h4>
          <nav className="footer-nav">
            <a href="tel:+37296344453">Наша история</a>
            <a href="tel:+37296344453">Локации</a>
            <a href="tel:+37296344453">Карьера</a>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Связь</h4>
          <nav className="footer-nav">
            <a href="mailto:hello@ballu.com">hello@ballu.com</a>
            <a href="tel:+37296344453">+375 (29) 6344453</a>
            <a href="tel:+37296344453">Instagram</a>
            <a href="tel:+37296344453">Telegram</a>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
