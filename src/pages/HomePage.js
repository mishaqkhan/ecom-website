import React from "react";
import TopProductsHeader from "../components/TopProductsHeader";
import TopProducts from "../components/TopProducts";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
};

function HomePage() {
  return (
    <div style={styles.container}>
      <div>
        <TopProductsHeader />
      </div>
      <div>
        <TopProducts />
      </div>
    </div>
  );
}

export default HomePage;
