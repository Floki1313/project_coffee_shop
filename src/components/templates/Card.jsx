import React from "react";
import "./CardWithButton"

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