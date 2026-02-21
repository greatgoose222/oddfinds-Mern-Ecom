import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useSelector(state => state.auth);
    const location = useLocation();

    if (loading) {
        return <div className="text-center p-10">Checking authentication...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return children;
}
