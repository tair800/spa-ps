import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductPage";
import ProductDetails from "./components/Detail";
import CreateProduct from "./pages/CreateProduct";
import NewCreated from "./pages/NewCreated"; 
import { useProducts } from "./store/ProductsContext";

const App = () => {
  const { products } = useProducts();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/new-created" element={<NewCreated />} /> {/* New Route */}
      </Routes>
    </Router>
  );
};

export default App;
