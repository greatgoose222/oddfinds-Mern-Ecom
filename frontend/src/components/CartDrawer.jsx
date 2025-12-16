import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartDrawer({ cartOpen, closeCartMenu }) {
    return (
        <div
            className={`fixed inset-0 z-40 lg:hidden bg-black/20 transition-opacity duration-300
                ${cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={closeCartMenu}
        >
            <section
                onClick={(e) => e.stopPropagation()}
                className={`
                    absolute right-0 top-0 h-full w-64
                    bg-white text-black p-5
                    flex flex-col gap-8
                    transform transition-transform duration-300 ease-in-out
                    ${cartOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <X className="cursor-pointer mt-2.5 ml-auto" onClick={closeCartMenu} />

                <div className="flex flex-col gap-3">
                    <Link to="/" onClick={closeCartMenu}>Cart</Link>
                    <Link to="/contact-us" onClick={closeCartMenu}>Contact Us</Link>
                    <Link to="/refund-policy" onClick={closeCartMenu}>Refund Policy</Link>
                    <Link to="/shipping-policy" onClick={closeCartMenu}>Shipping Policy</Link>
                </div>
            </section>
        </div>
    );
}
