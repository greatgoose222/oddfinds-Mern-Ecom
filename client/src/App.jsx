import { Navigate, Route, Routes } from 'react-router-dom'

import HomeLayout from '@/components/layout/HomeLayout'
import Home from '@/pages/user/Home'
import ProductDetails from '@/pages/user/ProductDetails'
import Checkout from '@/pages/user/Checkout'
import PaymentSuccess from '@/pages/user/PaymentSuccess'
import ShippingPolicy from '@/pages/user/ShippingPolicy'
import RefundPolicy from '@/pages/user/RefundPolicy'
import CategoryProducts from '@/components/user/CategoryProducts'
import Login from '@/pages/user/Login'
import Signup from '@/pages/user/Signup'
import Profile from '@/pages/user/Profile'

import AdminLayout from '@/components/layout/AdminLayout'
import Dashboard from '@/pages/admin/Dashboard'
import { ProtectedRoute } from '@/components/auth/ProtectedRoutes'
import { ProtectedAdminRoutes } from '@/components/auth/ProtectedAdminRoutes'
import AdminProducts from '@/pages/admin/AdminProducts'
import NewProduct from '@/pages/admin/NewProduct'
import AdminOrders from '@/pages/admin/AdminOrders'






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
          <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />

        </Route >

        <Route path="/admin" element={
          <ProtectedAdminRoutes>
            <AdminLayout />
          </ProtectedAdminRoutes>
        }>
          <Route index element={<Navigate to="products" />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="new-product" element={<NewProduct />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
