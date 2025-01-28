import React from "react";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "./ProductCard";

const styles = {
  productsList: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
};

function ProductsList({ searchString, selectedCategory }) {
  const prepareURL = () => {
    let url = "https://fakestoreapi.com/products";

    if (selectedCategory) {
      url = `${url}/category/${selectedCategory}`;
    }

    return url;
  };

  const url = prepareURL();
  const { data, isLoading } = useFetch(url);

  const filteredProducts = React.useMemo(() => {
    if (!searchString) {
      return data;
    }

    return data.filter((p) => {
      const lowerCaseTitle = p.title.toLowerCase();

      return lowerCaseTitle.search(searchString) !== -1;
    });
  }, [data, searchString]);

  return (
    <div style={styles.productsList}>
      {isLoading && <p>Loading...</p>}
      {filteredProducts?.map((p) => (
        <ProductCard product={p} />
      ))}
    </div>
  );
}

export default ProductsList;
