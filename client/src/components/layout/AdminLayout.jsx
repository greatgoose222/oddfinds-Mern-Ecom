import { LayoutDashboard, Package, ShoppingBag, UserStar } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div className="flex">
            <div className="w-60 pt-5 pl-5 h-screen ">
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

                    <div className=" mt-5 flex gap-2 justify-between">
                        <Link to="/" className="" >
                            <button className=" border rounded-md px-6 py-1  bg-[#c06135] text-white">Home</button>
                        </Link>

                        <button className=" border rounded-md px-5 py-1  bg-black text-white">Logout</button>
                    </div>


                </div>

            </div>
            <div className=" w-full">
                <Outlet />
            </div>

        </div>
    );
}

export default AdminLayout;