import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from "@/validators/user.schema.js";
import api from "@/utils/api";
import toast from "react-hot-toast";

function Signup() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data) => {

        try {
            const response = await api.post('/api/user/signup', data, {
                withCredentials: true,

            })
            toast.success("Signup successful");
            reset();
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong",
                { duration: 3000 }
            );
        }

    }

    return (

        <div className='flex justify-center items-center p-5 w-full sm:max-w-md mx-auto h-[80vh]'>
            <div className='px-5 py-10 w-full bg-white  rounded-md border shadow-lg '>
                <h1 className='text-2xl font-bold text-center pb-5'>Signup</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>

                    <div className='flex flex-col pb-3'>
                        <label className='text-lg font-medium pb-0.5' htmlFor="name">Name</label>
                        <input {...register("name")}
                            className='border border-gray-200 rounded-sm p-1.5 focus:outline-none '
                            id='name'
                            type="text"
                            placeholder='Enter Your name'
                        />
                        {errors.name && <span className="text-red-500 text-sm ">* {errors.name.message}</span>}
                    </div>

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

                    <button className='bg-blue-700 p-2.5 w-full rounded-lg text-white font-medium mb-4 hover:bg-blue-500 cursor-pointer'>Signup</button>
                    <p className='text-center'>Already have an account? <Link className='text-blue-700 hover:text-blue-500 cursor-pointer hover:underline' to='/login'>Login</Link></p>
                </form>

            </div>
        </div>

    );
}

export default Signup;



























// import { useState } from 'react';
// import api from "@/utils/api";
// import { Link, useNavigate } from 'react-router-dom';
// // import toast from 'react-hot-toast';


// function Signup() {
//     const [name, setname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await api.post('/api/user/signup', { name, email, password }, {
//                 withCredentials: true,

//             })
//             console.log(response)
//             setname("");
//             setEmail("");
//             setPassword("");
//             // toast.success("Signup successful!");
//             // navigate("/")
//         } catch (error) {
//             toast.error(error.response.data.error, { duration: 3000 })
//             console.log(error.response.data)
//         }
//     }


//     return (
//         <div className='flex justify-center items-center p-5 w-full sm:max-w-md mx-auto h-[80vh]'>
//             <div className='px-5 py-10 w-full bg-white  rounded-md border shadow-lg '>
//                 <h1 className='text-2xl font-bold text-center pb-5'>Signup</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className='flex flex-col pb-3'>
//                         <label className='text-lg font-medium pb-0.5' htmlFor="name">name</label>
//                         <input className='border border-gray-200 rounded-sm p-1.5 focus:outline-none '
//                             value={name}
//                             onChange={(e) => setname(e.target.value)}
//                             id='name' type="text" placeholder='Enter Your name' />

//                     </div>
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
//                     <button className='bg-blue-700 p-2.5 w-full rounded-lg text-white font-medium mb-4 hover:bg-blue-500 cursor-pointer'>Signup</button>
//                     <p className='text-center'>Already have an account? <Link className='text-blue-700 hover:text-blue-500 cursor-pointer hover:underline' to='/login'>Login</Link></p>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Signup