import React from 'react';
import './firebase-config'; // firebase config
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import ProductsPage from "./pages/ProductsPage";
import DashboardPage from './pages/admin/DashboardPage';
import MainLayout from './components/layouts/MainLayot';
import DashboardLayout from './components/layouts/DashboardLayout';
import AdminProductsPage from './pages/admin/ProductsPage';
import CustomersPage from "./pages/admin/CustomersPage";
import OrdersPage from './pages/admin/OrdersPage';
import Private from './pages/Private';
import ReviewPage from './pages/admin/ReviewPage';
import ProfilePage from './pages/admin/ProfilePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="products"
            element={<ProductsPage />}
          />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="register"
            element={<RegisterPage />}
          />
        </Route>

        <Route
          path="/dashboard"
          element={
            <Private>
              <DashboardLayout />
            </Private>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route
            path="products"
            element={<AdminProductsPage />}
          />
          <Route
            path="customers"
            element={<CustomersPage />}
          />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
