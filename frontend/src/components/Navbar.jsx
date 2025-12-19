import { Link } from "react-router-dom";
import { CircleUserRoundIcon, Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import CartDrawer from "./CartDrawer";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false)
    const cartTotalItems = 6

    return (
        <nav className=" border-b border-primary ">
            <div className="max-w-6xl flex items-center justify-between w-full m-auto py-3 px-5">

                <div className="md:hidden mt-4">
                    <button onClick={() => setOpen(true)}>
                        <Menu strokeWidth={2.5} />
                    </button>

                    <MobileNavMenu open={open} closeMenu={() => setOpen(false)} />
                </div>

                <div >
                    <Link to="/">
                        <img className="h-12 w-auto -mt-2 " src="https://oddfinds.in/wp-content/uploads/2024/05/Group-8.png" alt="logo" />
                    </Link>
                </div>

                <div className="flex gap-5 mt-1 items-center">
                    <div className="hidden md:flex gap-3">
                        <Link to="/">Home</Link>
                        <Link to="/contact-us">Contact Us</Link>
                        <Link to="/refund-policy">Refund Policy</Link>
                        <Link to="/shipping-policy">Shipping Policy</Link>
                    </div>
                    <div className="flex gap-3 mt-2">
                        <CircleUserRoundIcon className="hidden sm:block" />
                        <div className="relative" onClick={() => setCartOpen(true)}>
                            <ShoppingCart />
                            <span className="absolute -top-1 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ">
                                {cartTotalItems}
                            </span>
                        </div>
                        <CartDrawer cartOpen={cartOpen} closeCartMenu={() => setCartOpen(false)} />
                    </div>
                </div>

            </div>
        </nav >
    );
}



