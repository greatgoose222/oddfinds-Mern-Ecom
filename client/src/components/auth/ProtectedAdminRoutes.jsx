import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedAdminRoutes({ children }) {
    const { user, loading } = useSelector(state => state.auth);
    const location = useLocation();

    if (loading) {
        return <div className="text-center p-10">Checking admin access...</div>;
    }

    if (!user || user.role !== "admin") {
        toast.error("Unauthrized!!")
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;

    }

    return children;
}
