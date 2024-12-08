import React from "react";
import { useProducts } from "../store/ProductsContext";
import ProductList from "../components/List.js"; 

const NewCreated = () => {
  const { products } = useProducts();
  
  const createdProducts = products.filter((product) => product.createdByMe);

  return (
    <div>
      <h1>Newly Created Products</h1>
      {createdProducts.length > 0 ? (
        <ProductList products={createdProducts} />
      ) : (
        <p>No products created by you yet.</p>
      )}
    </div>
  );
};

export default NewCreated;
