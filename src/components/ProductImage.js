function ProductImage({ product }) {
  return <img src={product?.image} alt={product?.title} height={300} />;
}

export default ProductImage;
