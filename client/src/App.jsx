import { Route, Routes } from 'react-router-dom'

import HomeLayout from './components/layout/HomeLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import AdminLayout from './components/layout/AdminLayout'
import Dashboard from './pages/Dashboard'
import { ProtectedRoute } from './components/auth/ProtectedRoutes'
import { ProtectedAdminRoutes } from './components/auth/ProtectedAdminRoutes'




function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
        </Route >

        <Route path="/admin" element={
          <ProtectedAdminRoutes>
            <AdminLayout />
          </ProtectedAdminRoutes>
        }>
          <Route index element={<Dashboard />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
