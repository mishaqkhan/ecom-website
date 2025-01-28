import React from "react";
import SearchBar from "../components/SearchBar";
import ProductCategories from "../components/ProductCategories";
import ProductsList from "../components/ProductsList";

const styles = {
  allProductsContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  searchContiner: {
    display: "flex",
    justifyContent: "center",
  },
};

function AllProductsPage() {
  const [searchString, setSearchString] = React.useState();
  const [selectedCategory, setSelectedCategory] = React.useState();

  return (
    <div style={styles.allProductsContainer}>
      <div style={styles.searchContiner}>
        <SearchBar setSearchString={setSearchString} />
        <ProductCategories setSelectedCategory={setSelectedCategory} />
      </div>
      <div>
        <ProductsList
          searchString={searchString}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}

export default AllProductsPage;
