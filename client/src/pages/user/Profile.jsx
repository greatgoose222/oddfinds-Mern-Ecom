import api from "@/utils/api";
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { clearAuth } from "@/redux/authSlice";
import { LogOut } from 'lucide-react';
import UserOrders from "@/components/user/UserOrders";

function Profile() {
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            const response = await api.post('/api/user/logout', {
                withCredentials: true,
            })
            dispatch(clearAuth())
            toast.success("Logout successful!");
        } catch (error) {
            toast.error(error.response.data.error)
            console.log(error)
        }
    }
    return (
        <div className='p-5 lg:max-w-6xl mx-auto'>
            <div className='flex justify-between pb-4'>
                <h1 className='font-semibold text-2xl'>My Account</h1>
                <button
                    onClick={handleLogout}
                    className="flex text-sm items-center gap-1 bg-black text-white px-4 py-2 rounded-lg 
             hover:bg-red-600 transition duration-300 shadow-md cursor-pointer"
                >
                    <LogOut className='mt-0.5' size={15} />
                    Logout
                </button>
            </div>

            <div className='bg-[#FCF8F8] rounded-2xl'>
                <div className='p-4'>
                    <UserOrders />
                </div>
            </div>


        </div>
    )
}

export default Profile