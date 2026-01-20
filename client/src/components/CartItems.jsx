import { removeFromCart } from '@/redux/cartSlice'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CartItems() {
    const cartItems = useSelector(state => state.cart.cartItems)
    // console.log(cartItems)
    const dispatch = useDispatch()
    return (
        <>
            {cartItems.map((items) => {

                return <div
                    key={items._id}
                    className='grid grid-cols-[40px_1fr_60px] border-b-2 mb-4 pb-3'>
                    <div>
                        <Trash2
                            onClick={() => dispatch(removeFromCart(items))}
                        />
                    </div>
                    <div className='-mt-0.5'>
                        <p>{items.name}</p>
                        <div className='flex gap-2 items-baseline'>
                            <p className='font-bold'>{`₹${items.price}`}</p>
                            <p className='text-[12px]'>{`X ${items.quantity}`}</p>
                        </div>
                    </div>
                    <div>
                        <img className='h-15 w-auto ml-auto rounded' src={items.images.find((x) => x.isFeatured === true).url} alt="" />
                    </div>
                </div>

            })}

        </>
    )
}

export default CartItems