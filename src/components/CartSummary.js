import React from "react";
import { Context as CartContext } from "../context/cart";

function CartSummary() {
  const { cart } = React.useContext(CartContext);
  const totalAmount = React.useMemo(() => {
    return cart.reduce((acc, item) => {
      acc += item.price;
      return acc;
    }, 0);
  }, [cart]);
  return (
    <>
      <p>Total Products: {cart.length}</p>
      <p>Total Amount: ${totalAmount}</p>
    </>
  );
}

export default CartSummary;
