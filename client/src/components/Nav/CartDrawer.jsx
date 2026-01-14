import { X } from 'lucide-react'
import { closeCart } from '@/redux/uiSlice'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../CartItems'
import { useEffect } from 'react'

function CartDrawer() {
    const isCartOpen = useSelector(state => state.ui.isCartOpen)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    // console.log(totalPrice)
    const dispatch = useDispatch()

    useEffect(() => { //disable bg scroll
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.padding = "-pl-5";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isCartOpen]);


    return (
        <div className={`fixed h-screen w-full z-40 bg-black/50
                transition-opacity duration-300       
                ${isCartOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`}
            onClick={() => dispatch(closeCart())}
        >

            <div className={`absolute h-screen w-76 px-5 pt-6  bg-white right-0 flex flex-col
                transform transition-transform duration-300 ease-in-out
                ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between items-center '>
                    <h1 className='text-lg font-medium'>Your Cart</h1>
                    <X
                        onClick={() => dispatch(closeCart())}
                        strokeWidth={2}
                        className="cursor-pointer" />
                </div>

                <div className='mt-5 flex-1 overflow-y-auto'>
                    {totalPrice === 0 ? <p className='text-center'>Your Cart Is Emplty...</p> : <CartItems />}
                </div>
                <div className='-mx-2'>
                    <div className='flex justify-between pb-2'>
                        <p className='font-bold'>Subtotal:</p>
                        <p className='font-bold'>{`₹${totalPrice}`}</p>
                    </div>
                    <Link
                        to="/checkout"
                        onClick={() => dispatch(closeCart())}
                        className="block p-4 mb-3 rounded text-amber-50 font-medium text-lg bg-green-500 w-full text-center"
                    >
                        Proceed To Checkout
                    </Link>

                </div>
            </div>

        </div >
    )
}

export default CartDrawer