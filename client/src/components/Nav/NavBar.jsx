import { CircleUserRoundIcon, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { openMenu, openCart } from "@/redux/uiSlice";



export default function Navbar() {

    const dispatch = useDispatch()
    const cartTotalItems = useSelector(state => state.cart.cartItems.length)

    return (
        <nav className=" border-b border-primary ">
            <div className="max-w-6xl flex items-center justify-between w-full m-auto py-3 px-5">

                <div className="md:hidden mt-4">
                    <Menu
                        onClick={() => dispatch(openMenu())}
                        strokeWidth={2}
                        className="cursor-pointer"
                    />

                </div>

                <div >
                    <Link to="/">
                        <img className="h-12 w-auto -mt-2 " src="https://oddfinds.in/wp-content/uploads/2024/05/Group-8.png" alt="logo" />
                    </Link>
                </div>

                <div className="flex gap-5 mt-1 items-center">
                    <div className="hidden md:flex gap-3">
                        <Link to="/">Home</Link>

                    </div>
                    <div className="flex gap-3 mt-2">
                        <CircleUserRoundIcon
                            strokeWidth={1.7}
                            className="hidden sm:block"
                        />
                        <div className="relative">
                            <ShoppingCart
                                onClick={() => dispatch(openCart())}
                                strokeWidth={1.7}
                                className="cursor-pointer"
                            />
                            <span className="absolute -top-1 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ">
                                {cartTotalItems}
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </nav >
    );
}