import { React } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
//component
import CartItem from "../../component/cartitem/CartItem";
import { Link } from "react-router-dom";
//action
import { addToCart, removeFromCart } from "../../redux/action/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const qtyChangeHandle = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandle = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartNumber = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  
  const getCartSubTotal = () => {
    return cartItems.reduce((price,item) => item.price * item.qty + price,0);
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty
            <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              item={item}
              qtyChangeHandle={qtyChangeHandle}
              removeHandle={removeHandle}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartNumber()}) item</p>
          <p>$ {getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
