import React from "react";
import { useFetch } from "../hooks/useFetch";
import TopProduct from "./ProductCard";

const styles = {
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

function TopProducts() {
  const { data, isLoading } = useFetch("https://fakestoreapi.com/products");

  const topProducts = React.useMemo(() => {
    if (!data) {
      return [];
    }

    const ratingSortedProducts = data.toSorted((a, b) => {
      return b.rating.rate - a.rating.rate;
    });

    return ratingSortedProducts.slice(0, 10);
  });

  return (
    <div style={styles.productList}>
      {topProducts.map((product) => (
        <TopProduct product={product} />
      ))}
    </div>
  );
}

export default TopProducts;
