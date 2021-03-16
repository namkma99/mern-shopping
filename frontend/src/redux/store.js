import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//Reducer
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducers';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,

});

const middleware = [thunk];

const cartLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initState = {
  cart: {
    cartItems: cartLocalStorage,
  }
}

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);



export default store;
