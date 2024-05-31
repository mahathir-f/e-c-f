import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());

  const addToCart = (itemsId) => {
    setcartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemsId) => {
    setcartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }));
  };
  const getTotalcartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += iteminfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalcart = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalcart += cartItems[item];
      }
    }
    return totalcart;
  };
  const contextvalue = {
    getTotalCartItems,
    getTotalcartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
