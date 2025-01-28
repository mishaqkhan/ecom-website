import CartSummary from "../components/CartSummary";
import CartTable from "../components/CartTable";

const styles = {
  cart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    width: "100%",
  },
};

function CartPage() {
  return (
    <div style={styles.cart}>
      <div>
        <h1>Cart</h1>
      </div>
      <hr />
      <div>
        <CartTable />
      </div>
      <div>
        <CartSummary />
      </div>
    </div>
  );
}

export default CartPage;
