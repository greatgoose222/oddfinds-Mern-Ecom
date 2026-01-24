import { LayoutDashboard, Package, ShoppingBag, UserStar } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div className="flex">
            <div className="w-70 p-5 h-screen border-r-2 ">
                <div className="flex items-center gap-3">
                    <UserStar strokeWidth={1.5} />
                    <h1 className="text-2xl font-bold"> Admin Panel</h1>
                </div>
                <div className=" flex flex-col pt-5 pl-2 gap-1.5">
                    <Link to="/admin" className="flex items-center gap-3" >
                        <LayoutDashboard size={18} strokeWidth={2.2} />
                        <span className="text-xl font-mono -mt-0.7">Dashboard</span>
                    </Link>
                    <Link to="/admin/products" className="flex items-center gap-3" >
                        <Package size={19} strokeWidth={2} />
                        <span className="text-xl font-mono -mt-0.7">Products</span>
                    </Link>

                    <Link to="/admin/orders" className="flex items-center gap-3" >
                        <ShoppingBag size={18} strokeWidth={2} />
                        <span className="text-xl font-mono -mt-0.7">Orders</span>
                    </Link>

                </div>

            </div>
            <div className=" w-full">
                <Outlet />
            </div>

        </div>
    );
}

export default AdminLayout;