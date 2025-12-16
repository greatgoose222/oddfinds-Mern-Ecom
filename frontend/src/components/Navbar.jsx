import { Link } from "react-router-dom";
import { CircleUserRoundIcon, Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className=" border-b border-amber-600 ">
            <div className="max-w-6xl flex items-center justify-between w-full m-auto py-3 px-5">
                <div className="md:hidden mt-4">
                    <button onClick={() => setOpen(true)}>
                        <Menu strokeWidth={2.5} />
                    </button>

                    <MobileNavMenu open={open} closeMenu={() => setOpen(false)} />
                </div>

                <div>
                    <Link to="/">
                        <img className="h-12 w-auto " src="https://oddfinds.in/wp-content/uploads/2024/05/Group-8.png" alt="logo" />
                    </Link>
                </div>
                <div className="flex gap-5 mt-1 ">
                    <div className="hidden md:flex gap-3">
                        <Link to="/">Home</Link>
                        <Link to="/contact-us">Contact Us</Link>
                        <Link to="/refund-policy">Refund Policy</Link>
                        <Link to="/shipping-policy">Shipping Policy</Link>
                    </div>
                    <div className="flex gap-3">
                        <CircleUserRoundIcon className="hidden sm:block" />
                        <ShoppingCart />
                    </div>
                </div>
            </div>
        </nav>
    );
}



