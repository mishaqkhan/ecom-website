import React from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const deleteFromCart = (product) => {
    const productIndex = cart.findIndex((p) => p.id === product.id);
    const updatedCart = cart.toSpliced(productIndex, 1);

    setCart(updatedCart);
  };

  return (
    <Context.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
