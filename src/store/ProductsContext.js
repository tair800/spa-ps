import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.map((product) => ({ ...product, liked: false })));
    };

    fetchProducts();
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prev) => [
      { ...newProduct, liked: false, createdByMe: true },
      ...prev,
    ]);
  };
  

  return (
    <ProductsContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
