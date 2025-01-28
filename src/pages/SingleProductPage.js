import { useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import { useFetch } from "../hooks/useFetch";
import ProductContent from "../components/ProductContent";

function SingleProductPage() {
  const { id } = useParams();

  const { data, isLoading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <ProductImage product={data} />
      </div>
      <div>
        <ProductContent product={data} />
      </div>
    </div>
  );
}

export default SingleProductPage;
