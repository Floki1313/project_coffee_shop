/**
 * CardWithButton.jsx — карточка товара в меню с кнопкой добавления в корзину.
 * Родитель передаёт onAdd; при клике собирается объект в формате, который ждёт OrderPage.
 */
import React from "react";
import "./CardWithButton.css";

/**
 * name_img — результат import картинки 
 * alt_ — строка для атрибута alt 
 * title, price, description — отображаются как есть; price числом для расчёта суммы.
 *
 * @param {function(object): void} onAdd — вызывается с объектом позиции для корзины
 */
const CardWithButton = ({ name_img, alt_, title, price, description, onAdd }) => {
  return (
    <div className="menu-card">
      <div className="card-image-bg">
        <img src={name_img} alt={alt_} className="card-img" />
      </div>
      <div className="card-info">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {/* Шаблонная строка не используется: цена и валюта размечены явно */}
          <span className="card-price">{price} BYN</span>
        </div>
        <p className="card-description">
          {description}
        </p>
        <button
          className="add-button"
          onClick={() => {
            // Объект должен содержать поля, которые читает Order.jsx (name, price, img, desc)
            onAdd({
              name: title, // в корзине показывается как имя товара
              price: price, // число — для суммы
              img: name_img, //для background-image в заказе
              desc: "Стандартный", // фиксированная подпись
            });
          }}
        >
          + Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default CardWithButton;
