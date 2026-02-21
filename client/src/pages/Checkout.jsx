import SaveAddress from '@/components/SaveAddress'
import CartItems from '@/components/CartItems'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Phone } from 'lucide-react';
import AddressSheet from '@/components/AddressSheet';
import api from "@/utils/api";

import toast from 'react-hot-toast';
import { removeAddress } from '@/redux/authSlice';
import ShippingDate from '@/components/ShippingDate';
import { handleCodOrder, handleOnlineOrder } from '@/helpers/order.helper';
import { useNavigate } from 'react-router-dom';


function Checkout() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user);
    const { cartItems, totalPrice } = useSelector(state => state.cart)
    console.log(cartItems)
    console.log(totalPrice)
    const [open, setOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("online");

    const navigate = useNavigate()

    console.log(user)
    const handleAddressRemove = async () => {

        try {
            const response = await api.delete('/api/user/removeAddress', {
                withCredentials: true,
            })
            dispatch(removeAddress())
            toast.success("address removed");
        } catch (error) {
            console.log(error)
        }
    };



    return (
        <>
            <div className="p-5 lg:max-w-6xl mx-auto">
                <h2 className='font-medium text-xl pb-5'>Order Summary</h2>
                <div>
                    <CartItems />
                </div>

                {/* ---- address ----- */}
                <div>
                    {user?.address?.fullName ? (
                        <div>
                            <div className='shadow rounded-md mb-5'>

                                <div className='shadow-sm rounded-md p-4'>
                                    <div className='flex justify-between'>
                                        <p>Delivery details</p>
                                        <div className='flex gap-2'>
                                            <button className="text-blue-600 cursor-pointer" onClick={handleAddressRemove}>remove</button>
                                            <button className="text-blue-600 cursor-pointer" onClick={() => setOpen(true)}>change </button>
                                            {open && <AddressSheet onClose={() => setOpen(false)} title={'Change Address'} />}
                                        </div>
                                    </div>
                                    <p className='font-medium first-letter:uppercase'>{user.address.fullName}</p>
                                    <p className='first-letter:uppercase'>{user.address.addressLine}, {user.address.city}, {user.address.state}, {user.address.pincode}</p>

                                    <div className='flex items-center gap-1'>
                                        {<Phone size={14} strokeWidth={1} />}
                                        <p className=''>{user.address.phone}</p>
                                    </div>
                                </div>

                                <div>
                                    <ShippingDate />
                                </div>
                            </div>



                            <div className="flex flex-col gap-1 shadow rounded-md mb-5 p-4 border">
                                <p >Payment Method</p>
                                <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                                    <input
                                        type="radio"
                                        name="choice"
                                        value="online"
                                        defaultChecked
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="h-4 w-4 accent-blue-600"
                                    />
                                    Online Payment
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                                    <input
                                        type="radio"
                                        name="choice"
                                        value="cod"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="h-4 w-4 accent-blue-600"
                                    />
                                    Cash On Delivery
                                </label>
                            </div>


                            <div>
                                {paymentMethod === 'online' ?
                                    <button
                                        onClick={() => handleOnlineOrder(user.address, paymentMethod, cartItems, totalPrice, navigate)}
                                        className="w-full bg-green-600 text-white py-3 rounded-md font-medium">  Proceed To Payment
                                    </button> : <button
                                        onClick={() => handleCodOrder(user.address, paymentMethod, cartItems, totalPrice, navigate)}
                                        className="w-full bg-green-600 text-white py-3 rounded-md font-medium">  Place Cod Order
                                    </button>}

                            </div>





                        </div>
                    ) : <div>
                        <h2 className='font-medium text-xl pb-5'>Add Address</h2>
                        <SaveAddress /></div>}
                </div>

                {/*---- paymentMethod -----*/}




            </div>
        </>
    )
}

export default Checkout