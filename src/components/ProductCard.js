import ProductActionButtons from "./ProductActionButtons";

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "300px",
    margin: "10px",
  },
};

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} height={300} alt={product.title} />
      <h3>{product.title.substring(0, 12)}...</h3>
      <text>{product.description.substring(0, 90)}</text>
      <ProductActionButtons product={product} />
    </div>
  );
}

export default ProductCard;
