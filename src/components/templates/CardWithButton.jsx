import React from "react";
import "./CardWithButton.css"


const CardWithButton = ({ name_img, alt_, title, price, description, onAdd}) => {
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

        
        <button className="add-button" onClick={() =>{ 
          onAdd({ name: title, 
                  price: price, 
                  img: name_img, 
                  desc: "Стандартный"});
        }}>+ Добавить в корзину</button>
        
      </div>
    </div>
  );
};

export default CardWithButton;