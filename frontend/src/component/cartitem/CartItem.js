import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CartItem = ({ item, qtyChangeHandle, removeHandle}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`product/${item.product}`} className="cartitem_name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>

      <select
        className="cartitem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandle(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button className="cartitem__deteteBtn" onClick={() => removeHandle(item.product)}>
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};

export default CartItem;
