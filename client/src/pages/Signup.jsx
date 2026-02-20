
import { useState } from 'react';
import api from "@/utils/api";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Signup() {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/user/signup', { name, email, password }, {
                withCredentials: true,

            })
            console.log(response)
            setname("");
            setEmail("");
            setPassword("");
            toast.success("Signup successful!");
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='flex justify-center items-center m-20'>
            <div className='bg-white max-w-md w-full p-8 rounded-md border shadow-lg'>
                <h1 className='text-2xl font-bold text-center pb-5'>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col pb-3'>
                        <label className='text-lg font-medium pb-0.5' htmlFor="name">name</label>
                        <input className='border border-gray-200 rounded-sm p-1.5 focus:outline-none '
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            id='name' type="text" placeholder='Enter Your name' />

                    </div>
                    <div className='flex flex-col pb-3'>
                        <label className='text-lg font-medium pb-0.5' htmlFor="email">Email</label>
                        <input className='border border-gray-200 rounded-sm p-1.5 focus:outline-none'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id='email' type="text" placeholder='Enter Your Enail' />
                    </div>
                    <div className='flex flex-col pb-6'>
                        <label className='text-lg font-medium pb-0.5' htmlFor="password">Password</label>
                        <input className='border border-gray-200 rounded-sm p-1.5 focus:outline-none'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id='password' type="password" placeholder='Enter Your Password' />
                    </div>
                    <button className='bg-blue-700 p-2.5 w-full rounded-lg text-white font-medium mb-4 hover:bg-blue-500 cursor-pointer'>Signup</button>
                    <p className='text-center'>Already have an account? <Link className='text-blue-700 hover:text-blue-500 cursor-pointer hover:underline' to='/login'>Login</Link></p>
                </form>

            </div>
        </div>
    )
}

export default Signup