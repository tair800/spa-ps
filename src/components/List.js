import React from "react";
import Card from "./Card.js";

const ProductList = ({ products, onLike, onDelete }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
    