import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAuth, clearAuth, setLoading } from "@/redux/authSlice";

export default function AuthProvider({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuth = async () => {
            dispatch(setLoading());

            try {
                const res = await axios.get(
                    "http://localhost:3000/api/user/me",
                    { withCredentials: true }
                );
                dispatch(setAuth(res.data.user));
            } catch (err) {
                dispatch(clearAuth());
            }
        };

        checkAuth();
    }, [dispatch]);

    return children;
}
