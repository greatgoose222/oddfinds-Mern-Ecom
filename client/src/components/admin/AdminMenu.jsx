import { clearAuth } from "@/redux/authSlice";
import api from "@/utils/api";
import { AppWindow, LayersPlus, LogOut, Package, ShoppingBag, UserStar } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function AdminMenu({ onClose }) {

    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            const response = await api.post('/api/user/logout', {
                withCredentials: true,
            })
            dispatch(clearAuth())
            toast.success("Logout successful!");
        } catch (error) {
            toast.error(error.response.data.error)
            console.log(error)
        }
    }


    return (
        <div>
            <div className=" flex flex-col pt-4 gap-1.5">

                <Link to="/admin/products" className="flex items-center gap-3" onClick={onClose} >
                    <Package size={19} strokeWidth={2} />
                    <span className="text-xl font-mono -mt-0.7">Products</span>
                </Link>

                <Link to="/admin/new-product" className="flex items-center gap-3" onClick={onClose} >
                    <LayersPlus size={19} strokeWidth={2} />
                    <span className="text-xl font-mono -mt-0.7">Add-Product</span>
                </Link>

                <Link to="/admin/orders" className="flex items-center gap-3" onClick={onClose} >
                    <ShoppingBag size={18} strokeWidth={2} />
                    <span className="text-xl font-mono -mt-0.7">Orders</span>
                </Link>

                <Link to="/" className="flex items-center gap-3" >
                    <AppWindow size={18} strokeWidth={2} />
                    <span className="text-xl font-mono -mt-0.7">Home</span>
                </Link>

                <button
                    onClick={handleLogout}
                    className="flex text-sm items-center gap-1 bg-black text-white px-4 py-2 rounded-lg max-w-24 mt-2 
             hover:bg-red-600 transition duration-300 shadow-md cursor-pointer"
                >
                    <LogOut className='mt-0.5' size={15} />
                    Logout
                </button>
            </div>

        </div>
    );
}

export default AdminMenu;