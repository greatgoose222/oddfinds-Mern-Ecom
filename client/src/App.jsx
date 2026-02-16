import { Route, Routes } from 'react-router-dom'

import HomeLayout from './components/layout/HomeLayout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import PaymentSuccess from './pages/PaymentSuccess'
import ShippingPolicy from './pages/ShippingPolicy'
import RefundPolicy from './pages/RefundPolicy'
import CategoryProducts from './components/CategoryProducts'


import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import AdminLayout from './components/layout/AdminLayout'
import Dashboard from './pages/Dashboard'
import { ProtectedRoute } from './components/auth/ProtectedRoutes'
import { ProtectedAdminRoutes } from './components/auth/ProtectedAdminRoutes'
import AdminProducts from './pages/Admin/AdminProducts'
import NewProduct from './pages/Admin/NewProduct'
import AdminOrders from './pages/Admin/AdminOrders'






function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:slug" element={<ProductDetails />} />
          <Route path="product/category/:category" element={<CategoryProducts />} />
          <Route path="checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />

        </Route >

        <Route path="/admin" element={
          <ProtectedAdminRoutes>
            <AdminLayout />
          </ProtectedAdminRoutes>
        }>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="new-product" element={<NewProduct />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
