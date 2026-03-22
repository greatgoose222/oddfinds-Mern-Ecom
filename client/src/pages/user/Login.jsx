import api from "@/utils/api";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/validators/user.schema';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { setAuth } from '@/redux/authSlice';
import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';



function Login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { state } = useLocation();
    const from = state?.from || "/";



    const onSubmit = async (data) => {

        try {
            const response = await api.post('/api/user/login', data, {
                withCredentials: true,

            })
            reset();
            dispatch(setAuth(response.data.user));
            navigate(from, { replace: true });
            toast.success("Login successful!");

        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong",
                { duration: 3000 }
            );
        }

    }

    return (
        <div className='flex justify-center items-center p-5 w-full sm:max-w-md mx-auto h-[80vh]'>
            <div className='px-5 py-15 w-full bg-white  rounded-md border shadow-lg '>
                <h1 className='text-2xl font-bold text-center pb-5'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex flex-col pb-3'>
                        <label className='text-lg font-medium pb-0.5' htmlFor="email">Email</label>
                        <input {...register("email")}
                            className='border border-gray-200 rounded-sm p-1.5 focus:outline-none '
                            id='email'
                            type="email"
                            placeholder='Enter Your Email'
                        />
                        {errors.email && <span className="text-red-500 text-sm ">* {errors.email.message}</span>}
                    </div>

                    <div className='flex flex-col pb-3'>
                        <label className='text-lg font-medium pb-0.5' htmlFor="password">Password</label>
                        <input {...register("password")}
                            className='border border-gray-200 rounded-sm p-1.5 focus:outline-none '
                            id='password'
                            type="password"
                            placeholder='Enter Your Password'
                        />
                        {errors.password && <span className="text-red-500 text-sm ">* {errors.password.message}</span>}
                    </div>

                    <button className='bg-blue-700 p-2.5 w-full rounded-lg text-white font-medium mb-4 hover:bg-blue-500 cursor-pointer'>Login</button>
                    <p className='text-center'>New User? <Link className='text-blue-700 hover:text-blue-500 cursor-pointer hover:underline' to='/signup'>Signup</Link></p>
                </form>

            </div>
        </div>
    )
}

export default Login








// import { setAuth } from '@/redux/authSlice';
// import api from "@/utils/api";
// import React from 'react'
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { useDispatch } from 'react-redux';

// import { Link, useNavigate, useLocation } from 'react-router-dom';



// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate()
//     const dispatch = useDispatch();

//     const { state } = useLocation();
//     const from = state?.from || "/";

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await api.post('/api/user/login', { email, password }, {
//                 withCredentials: true,
//             })
//             console.log(response)
//             setEmail("");
//             setPassword("");
//             dispatch(setAuth(response.data.user));
//             navigate(from, { replace: true });
//             toast.success("Login successful!");
//         } catch (error) {
//             toast.error(error.response.data.error, { duration: 3000 })
//             console.log(error)
//         }
//     }


//     return (
//         <div className='flex justify-center items-center p-5 w-full sm:max-w-md mx-auto h-[80vh]'>
//             <div className='px-5 py-15 w-full bg-white  rounded-md border shadow-lg '>
//                 <h1 className='text-2xl font-bold text-center pb-5'>Login</h1>
//                 <form onSubmit={handleSubmit}>

//                     <div className='flex flex-col pb-3'>
//                         <label className='text-lg font-medium pb-0.5' htmlFor="email">Email</label>
//                         <input className='border border-gray-200 rounded-sm p-1.5 focus:outline-none'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             id='email' type="text" placeholder='Enter Your Enail' />
//                     </div>
//                     <div className='flex flex-col pb-6'>
//                         <label className='text-lg font-medium pb-0.5' htmlFor="password">Password</label>
//                         <input className='border border-gray-200 rounded-sm p-1.5 focus:outline-none'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             id='password' type="password" placeholder='Enter Your Password' />
//                     </div>
//                     <button className='bg-blue-700 p-2.5 w-full rounded-lg text-white font-medium mb-4 hover:bg-blue-500 cursor-pointer'>Login</button>
//                     <p className='text-center'>New User? <Link className='text-blue-700 hover:text-blue-500 cursor-pointer hover:underline' to='/signup'>Signup</Link></p>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Login





