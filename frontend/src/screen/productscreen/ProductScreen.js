import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
//action
import { getProductDetails } from "../../redux/action/productAction";
import { addToCart } from "../../redux/action/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;


  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  // console.log(product)

  const addToCartHandle = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
    // console.log(dispatch(addToCart(product._id, qty)))
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p className="left__price">Price: ${product.price}</p>
              <p className="left__description">{product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p className="">
                price: <span>${product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandle}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
