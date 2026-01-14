import React from 'react'
import MyOrdersPage from './MyOrdersPage'

function Profile() {
    return (
        <div className=' flex gap-2 max-w-6xl mx-auto px-5 flex-col sm:flex-row mt-5'>
            <div className='bg-amber-100 grow text-center p-5'>
                <h1>Admin User</h1>
                <p>admin@gmail.com</p>
                <button className='p-2 bg-amber-800 w-full rounded max-w-30 text-amber-50 mt-3'>Logout</button>
            </div>
            <div className=' grow'>
                <MyOrdersPage />
            </div>
        </div>
    )
}

export default Profile