import { useState } from "react";

const useStore = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleLike = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
    setFavorites((prev) =>
      prev.some((fav) => fav.id === id)
        ? prev.filter((fav) => fav.id !== id)
        : [...prev, products.find((p) => p.id === id)]
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return { products, setProducts, favorites, toggleLike, deleteProduct };
};

export default useStore;
