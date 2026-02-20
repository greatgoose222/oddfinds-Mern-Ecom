import api from "@/utils/api"
import { useEffect, useState } from "react";

function UserOrders() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await api.get('/api/order/user-orders', {
                    withCredentials: true
                })
                // console.log(response.data.orders)
                setOrders(response.data.orders);

            } catch (error) {
                // setError("Something went wrong"); 
                console.log(error)
            }
        };
        getOrders();
    }, []);


    console.log(orders)
    return (
        <div>
            <h1> MyOrders</h1>
            {orders.map(order => (

                <div className="flex flex-col gap-2 p-2 my-2 rounded-md bg-white shadow">
                    <p className="">Order Id: <span className="font-semibold">#{order._id}</span></p>
                    <div className="flex flex-col  gap-2 p-2 border border-gray-100 rounded-md">
                        {order.orderItems.map(item => (

                            <div className="flex gap-2 ">
                                <img className="h-10 rounded" src={item.image} />
                                <div className="-mt-1">
                                    <p>{item.name}</p>
                                    <p className="-mt-0.5">{item.price} x{item.quantity}</p>
                                </div>
                            </div>

                        ))}
                    </div>


                    <div className="flex justify-between">
                        <p className="font-medium">Total: {order.totalAmount}</p>
                        <p className={` font-medium capitalize px-2 ${order.paymentMethod === 'cod' ? 'text-red-500' : 'text-green-500'}`}> {order.paymentMethod}</p>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default UserOrders;