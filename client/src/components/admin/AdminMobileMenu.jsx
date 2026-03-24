import { X } from "lucide-react";
import AdminMenu from "./AdminMenu";

function AdminMobileMenu({ onClose, title }) {
    return (
        <div className="fixed inset-0 flex justify-end z-40">
            {/* overlay */}
            <div
                className="absolute inset-0"
                onClick={onClose}
            />

            {/* sidebar */}
            <div className="relative w-70 md:w-96 h-full bg-white p-4 animate-slideLeft ">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-black pt-2 pr-3 "
                >
                    <X />
                </button>

                <div className="pl-4 pt-6">
                    <AdminMenu onClose={onClose} />
                </div>
            </div>
        </div>
    );
}

export default AdminMobileMenu;