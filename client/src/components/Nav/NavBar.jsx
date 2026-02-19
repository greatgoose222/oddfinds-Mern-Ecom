import { CircleUserRoundIcon, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { openMenu, openCart } from "@/redux/uiSlice";



export default function Navbar() {

    const dispatch = useDispatch()
    const cartTotalItems = useSelector(state => state.cart.cartItems.length)
    const user = useSelector(state => state.auth.user?.role)
    return (
        <nav className=" border-b border-[#c06135] sticky top-0 bg-white z-50 ">
            <div className="max-w-6xl flex items-center justify-between w-full m-auto py-5 px-5">

                <div className="md:hidden mt-4 w-14">
                    <Menu
                        onClick={() => dispatch(openMenu())}
                        strokeWidth={2}
                        className="cursor-pointer"
                    />

                </div>

                <div >
                    <Link to="/">
                        <img className="h-12 w-auto -mt-1 " src="https://res.cloudinary.com/dtpzcjkra/image/upload/v1770813695/logo_yytoye.png" alt="logo" />
                    </Link>
                </div>

                <div className="flex gap-5 mt-1 items-center">
                    <div className="hidden md:flex gap-5 mt-1">
                        <Link to="/">Home</Link>
                        <Link to="/refund-policy">Refund Policy</Link>
                        <Link to="/shipping-policy">Shipping Policy</Link>

                    </div>
                    <div className="flex gap-2 mt-2 text-sm">
                        {user === "admin" && <Link to="/admin" className="text-xs rounded px-2 bg-black text-amber-50 inline-flex items-center ">Admin</Link>}
                        <Link to="/profile">
                            <CircleUserRoundIcon
                                strokeWidth={1.7}
                                className="sm:block"
                            />
                        </Link>

                        <div className="relative">
                            <ShoppingCart
                                onClick={() => dispatch(openCart())}
                                strokeWidth={1.7}
                                className="cursor-pointer"
                            />
                            <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ">
                                {cartTotalItems}
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </nav >
    );
}