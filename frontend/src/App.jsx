import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";



import AuthLayout from "./pages/layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminLayout from "./pages/layout/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminFeatures from "./pages/admin/AdminFeatures";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";

import ShoppingLayout from "./pages/layout/ShoppingLayout";
import ShoppingHome from "./pages/shopping/ShoppingHome";
import ShoppingListing from "./pages/shopping/ShoppingListing";
import ShoppingCheckout from "./pages/shopping/ShoppingCheckout";
import ShoppingAccount from "./pages/shopping/ShoppingAccount";

import UnauthPage from "./pages/UnauthPage";
import PageNotFound from "./pages/PageNotFound";
import CheckAuth from "./components/CheckAuth";


export default function App() {

  const isAuthenticated = true;
  const user = {
    name: 'mukesh',
    role: 'user'
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} ><AuthLayout /></CheckAuth>}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} ><AdminLayout /></CheckAuth>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} ><ShoppingLayout /></CheckAuth>}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>

        <Route path="/unauthpage" element={<UnauthPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <Footer/> */}
    </>
  );
}
