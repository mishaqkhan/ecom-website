function ProductContent({ product }) {
  const handleClickAddToCart = () => {};
  return (
    <div>
      <div>
        <h5>{product?.category.toUpperCase()}</h5>
      </div>
      <div>
        <h1>{product?.title}</h1>
      </div>
      <div>
        <h6>Rating {product?.rating.rate}</h6>
      </div>
      <div>
        <h6>${product?.price}</h6>
      </div>
      <div>
        <h6>${product?.description}</h6>
      </div>
      <div>
        <button onClick={handleClickAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductContent;
