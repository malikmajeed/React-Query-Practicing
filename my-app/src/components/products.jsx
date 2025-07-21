
import axios from "axios";
import { useQuery } from "@tanstack/react-query";



export default function ProductsFunction() {
  const fetchAllProdcuts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");

      return res.data.products;
    } catch (error) {
      console.log(error);
    }
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProdcuts,
  });

  if (isPending) {
    return "Loading....";
  }

  if (isError) {
    return `An Error Occured ${error}`;
  }

  return (
    <>
      <h1>Welcome Home</h1>
      <p>Here are the products</p>
      <div className="products-container">
      {data.map((product) => (
        <li key={product.id}>
         
          <h3>{product.title}</h3>
          <p>{product.rating}</p>
          <h5>{product.price}</h5>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </li>
      ))}

      </div>
    </>
  );
}

