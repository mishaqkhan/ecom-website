import React from "react";
import { Link } from "react-router-dom";
import { Context as CartContext } from "../context/cart";

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#b9aeae",
  },
  ul: {
    display: "flex",
    listStyle: "none",
    padding: "10px 0 0",
  },
  li: {
    paddingLeft: "1rem",
  },
};

function Navbar() {
  const { cart } = React.useContext(CartContext);

  return (
    <nav style={styles.nav}>
      <h3>
        <Link to="/">Ecommerce Website</Link>
      </h3>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/">Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="allProducts">Products</Link>
        </li>
        <li style={styles.li}>
          <Link to="cart">Cart {cart.length}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
