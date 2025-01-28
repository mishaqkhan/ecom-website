import React from "react";
import { Context as CartContext } from "../context/cart";

const styles = {
  table: {
    border: "1px solid black",
    width: "100%",
  },
  tr_td: {
    border: "1px solid black",
    padding: "10px",
  },
};

function CartTable() {
  const { cart, addToCart, deleteFromCart } = React.useContext(CartContext);

  const itemsList = React.useMemo(() => {
    return cart.reduce((acc, item) => {
      const itemIndex = acc.findIndex((a) => a.id === item.id);

      if (itemIndex !== -1) {
        acc[itemIndex].quantity = acc[itemIndex].quantity + 1;
        return acc;
      }

      return [...acc, { ...item, quantity: 1 }];
    }, []);
  }, [cart]);

  return (
    <table style={styles.table}>
      <tr style={styles.tr_td}>
        <th>Item</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      {itemsList.map((p) => {
        return (
          <tr style={styles.tr_td}>
            <td style={styles.tr_td}>
              <img src={p.image} height={50} />
            </td>
            <td style={styles.tr_td}>{p.title}</td>
            <td style={styles.tr_td}>${p.price}</td>
            <td style={styles.tr_td}>{p.quantity}</td>
            <td style={styles.tr_td}>
              <button onClick={() => addToCart(p)}>+</button>
            </td>
            <td style={styles.tr_td}>
              <button onClick={() => deleteFromCart(p)}>-</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default CartTable;
