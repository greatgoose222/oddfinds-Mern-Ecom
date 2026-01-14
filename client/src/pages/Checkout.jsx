import SaveAddress from '@/components/SaveAddress'
import CartItems from '@/components/CartItems'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Phone, TruckElectric } from 'lucide-react';
import AddressSheet from '@/components/AddressSheet';
import axios from 'axios';
// import { updateUser } from '@/redux/authSlice';
import toast from 'react-hot-toast';
import { removeAddress } from '@/redux/authSlice';

function Checkout() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user);
    console.log(user)
    console.log(user.address)

    const [open, setOpen] = useState(false);
    // date from 7 days from now
    const date = new Date();
    date.setDate(date.getDate() + 7);
    const weekday = date.toLocaleDateString("en-IN", { weekday: "long" });
    const month = date.toLocaleDateString("en-IN", { month: "short" });
    const day = date.toLocaleDateString("en-IN", { day: "numeric" });
    const formattedDate = ` ${weekday}, ${month} ${day}`;

    const handleAddressRemove = async () => {

        try {
            const response = await axios.delete('http://localhost:3000/api/user/removeAddress', {
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

                <div>
                    {user.address ? (
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

                                <div className='p-4 flex gap-2'>
                                    <TruckElectric size={18} strokeWidth={1.5} />
                                    <div className='-mt-0.5'>
                                        <p> <span className='font-medium'>Delivery Date</span>:{formattedDate}</p>
                                        <p className='text-sm text-green-700 -mt-1'>Free Shipping For You</p>
                                    </div>

                                </div>

                            </div>

                            <div>
                                <button className="w-full bg-green-600 text-white py-3 rounded-md font-medium">  Proceed To Payment </button>
                            </div>
                        </div>
                    ) : <div>
                        <h2 className='font-medium text-xl pb-5'>Add Address</h2>
                        <SaveAddress /></div>}
                </div>
            </div>
        </>
    )
}

export default Checkout