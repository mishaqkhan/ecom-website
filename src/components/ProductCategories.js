import { useFetch } from "../hooks/useFetch";

const styles = {
  btn: {
    cursor: "pointer",
    color: "white",
    backgroundColor: "orange",
    margin: "2px",
  },
};

function ProductCategories({ setSelectedCategory }) {
  const { data, isLoading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data?.map((c) => (
        <button onClick={() => setSelectedCategory(c)} style={styles.btn}>
          {c}
        </button>
      ))}
    </div>
  );
}

export default ProductCategories;
