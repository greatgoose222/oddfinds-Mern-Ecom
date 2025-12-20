import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
    const { pathname } = useLocation();

    const isAuthPage = pathname.startsWith("/auth");
    const isAdminPage = pathname.startsWith("/admin");
    const isShopPage = pathname.startsWith("/shop");

    // 1️⃣ Guest trying to access protected pages
    if (!isAuthenticated && (isAdminPage || isShopPage)) {
        return <Navigate to="/auth/login" replace />;
    }

    // 2️⃣ Logged-in user trying to access login/register
    if (isAuthenticated && isAuthPage) {
        return user?.role === "admin"
            ? <Navigate to="/admin/dashboard" replace />
            : <Navigate to="/shop/home" replace />;
    }

    // 3️⃣ Logged-in NON-admin trying to access admin pages
    if (isAuthenticated && user?.role !== "admin" && isAdminPage) {
        return <Navigate to="/unauth-page" replace />;
    }

    // 4️⃣ Admin trying to access shop pages
    if (isAuthenticated && user?.role === "admin" && isShopPage) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    return children;
}

export default CheckAuth;
