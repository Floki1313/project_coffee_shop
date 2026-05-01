import React from "react";
import heroImage from "../../img/main_cofe.svg";
import "./Section_1.css"

const Section_1 = ({onMenuClick,  onOrderClick}) => {
  return (
    <section className="hero">
      <div className="hero-container">
       
        <div className="hero-content">
          <h1 className="hero-title">Ощутите вкус идеальной чашки.</h1>
          <p className="hero-text">
            Крафтовый кофе свежей обжарки каждый день. Мы отбираем зёрна из лучших кофейных регионов мира и готовим их так, чтобы сделать ваш день ярче.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onOrderClick}>
              Заказать
              <span className="btn-icon">→</span> 
            </button>
            <button className="btn-secondary" onClick={onMenuClick}>
              Смотреть меню
            </button>
          </div>
        </div>

    
        <div className="hero-image-container">
          <img src={heroImage} alt="Кофе pour over" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Section_1;
