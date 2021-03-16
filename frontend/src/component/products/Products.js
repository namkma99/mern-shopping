import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Products = ({ imageUrl, name ,description, price, productId}) => {
  return (
    <div className="product">
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description}</p>
        <p className="info__price">${price}</p>
        <Link to={`product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Products;
