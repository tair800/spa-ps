import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../store/ProductsContext";

const ProductDetails = () => {
  const { products } = useProducts(); // Access products from context
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>product not found</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate("/products")}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Go Back to Main Page
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: "300px", borderRadius: "10px" }}
        />
        <div>
          <h2>{product.title}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
