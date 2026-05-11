/**
 * Card.jsx — информационная карточка без кнопки покупки (используется на главной в Section2).
 * Стили переиспользуют те же классы, что и CardWithButton (общий CardWithButton.css).
 */
import React from "react";
import "./CardWithButton"

/**
 * Пропсы совпадают с CardWithButton, кроме отсутствия onAdd — покупка с главной не предусмотрена.
 *
 * @param {string|object} name_img — URL изображения (import SVG)
 * @param {string} alt_ — alt для img
 * @param {string} title — заголовок
 * @param {number} price — цена (число)
 * @param {string} description — описание
 */
const Card = ({ name_img, alt_, title, price, description }) => {
  return (
    <div className="menu-card">

      <div className="card-image-bg">
        <img src={name_img} alt={alt_} className="card-img" />
      </div>

      <div className="card-info">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <span className="card-price">{price} BYN</span>
        </div>

        <p className="card-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
