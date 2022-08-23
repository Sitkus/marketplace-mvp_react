import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage.js';
import ProductPage from '../components/ProductPage.js';
import CartPage from '../components/CartPage.js';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />

      <Route exact path="/cart" element={<CartPage />} />

      <Route exact path="/products/:id" element={<ProductPage />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
