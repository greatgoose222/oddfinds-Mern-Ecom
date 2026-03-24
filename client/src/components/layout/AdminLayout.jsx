import { Menu, UserStar, } from "lucide-react";
import { Outlet } from "react-router-dom";
import AdminMobileMenu from "../admin/AdminMobileMenu";
import { useState } from "react";
import AdminMenu from "../admin/AdminMenu";

function AdminLayout() {

    const [open, setOpen] = useState(false);

    return (
        <div className="md:flex ">
            <div className="w-60 pt-5 pl-5 h-screen hidden md:block ">
                <div className="flex items-center gap-3">
                    <UserStar strokeWidth={1.5} />
                    <h1 className="text-2xl font-bold"> Admin</h1>
                </div>
                <AdminMenu />
            </div>



            <div className="md:hidden px-6 py-4 bg-black flex justify-between">
                <div className="flex items-center gap-3">
                    <UserStar strokeWidth={1.5} className="text-white" />
                    <h1 className="text-2xl font-bold text-white"> Admin Panel</h1>
                </div>

                <button className="text-white cursor-pointer" onClick={() => setOpen(true)}> <Menu /></button>
                {open && <AdminMobileMenu onClose={() => setOpen(false)} />}
            </div>


            <div className=" w-full">
                <Outlet />
            </div>

        </div>
    );
}

export default AdminLayout;