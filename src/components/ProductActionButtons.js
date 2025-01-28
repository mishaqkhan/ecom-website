import React from "react";
import { useNavigate } from "react-router-dom";
import { Context as CartContext } from "../context/cart";

const styles = {
  btnContainer: {
    display: "flex",
    gap: "10px",
    margin: "10px 0",
  },
  btn: {
    cursor: "pointer",
  },
  addToCartBtn: {
    color: "white",
    backgroundColor: "green",
  },
};

function ProductActionButtons({ product }) {
  const navigate = useNavigate();

  const { addToCart } = React.useContext(CartContext);

  const handleClickView = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div style={styles.btnContainer}>
      <button style={styles.btn} onClick={handleClickView}>
        View
      </button>
      <button
        onClick={() => addToCart(product)}
        style={{ ...styles.btn, ...styles.addToCartBtn }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductActionButtons;
