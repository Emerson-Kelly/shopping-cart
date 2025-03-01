import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  function addToCart(product) {
    setCartData((prevCartData) => {
      // Check if the product already exists in the cart
      const existingItem = prevCartData.find((item) => item.id === product.id);

      if (existingItem) {
        // Update quantity if item already exists
        return prevCartData.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity = 1
        return [...prevCartData, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(productId) {
    setCartData(
      (prevCartData) =>
        prevCartData
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  }

  console.log(
    "Total Cart Quantity:",
    cartData
      .map((cartItem) => cartItem.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
  console.log(cartData);

  return (
    <CartContext.Provider value={{ cartData, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
