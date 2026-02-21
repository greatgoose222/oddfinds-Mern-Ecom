import { X } from "lucide-react";
import { closeCart } from "@/redux/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../CartItems";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CartDrawer() {
    const isCartOpen = useSelector((state) => state.ui.isCartOpen);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // Disable background scroll when cart opens
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isCartOpen]);

    return (
        <div
            className={`fixed inset-0 w-full z-40 bg-black/50
        transition-opacity duration-300
        ${isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => dispatch(closeCart())}
        >
            {/* Drawer */}
            <div
                className={`absolute inset-y-0 right-0 w-80 max-w-full px-4 pt-8 bg-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-medium">Your Cart</h1>
                    <X
                        onClick={() => dispatch(closeCart())}
                        strokeWidth={2}
                        className="cursor-pointer"
                    />
                </div>

                {/* Scrollable Cart Items */}
                <div className="mt-5 flex-1 overflow-y-auto">
                    {totalPrice === 0 ? (
                        <p className="text-center">Your Cart Is Empty...</p>
                    ) : (
                        <CartItems />
                    )}
                </div>

                {/* Bottom Section */}
                <div className="pt-4 pb-2">
                    <div className="flex justify-between pb-3">
                        <p className="font-bold">Subtotal:</p>
                        <p className="font-bold">₹{totalPrice}</p>
                    </div>

                    <button
                        disabled={totalPrice === 0}
                        onClick={() => {
                            if (totalPrice === 0) return;

                            dispatch(closeCart());
                            navigate("/checkout");
                        }}
                        className={`w-full p-4 rounded text-white font-medium text-lg
                                  ${totalPrice === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
                    >
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartDrawer;