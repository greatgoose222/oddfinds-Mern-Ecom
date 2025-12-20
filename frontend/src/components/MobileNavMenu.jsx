import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNavMenu({ open, closeMenu }) {
    return (
        <div
            className={`fixed inset-0 z-40 lg:hidden bg-black/30 transition-opacity duration-300
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={closeMenu}>
            <section
                onClick={(e) => e.stopPropagation()}
                className={`
                    absolute left-0 top-0 h-full w-64 bg-white text-black p-5 flex flex-col gap-8 transform transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <X className="cursor-pointer mt-2.5" onClick={closeMenu} />

                <div className="flex flex-col gap-3">
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </div>
            </section>
        </div>
    );
}
