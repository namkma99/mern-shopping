import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
//components
import Products from "../../component/products/Products";
//Action
import { getProducts as listProduct } from "../../redux/action/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <div className="homescreen">
      <h2 className="homescreen__title"> Latest Product</h2>

      <div className="homescreen__products">
        {loading ? (
          <h2> loading ...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Products 
                key={product.id} 
                productId={product._id} 
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
