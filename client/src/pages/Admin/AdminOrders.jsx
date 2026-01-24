import axios from "axios";
import { ExternalLink, Package, SquareChevronLeft, SquareChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/order', {
                    params: { page, limit: 5 },
                    withCredentials: true
                })
                // console.log(response.data)
                setOrders(response.data.orders);
                setTotalPages(response.data.totalPages)
            } catch (error) {
                // setError("Something went wrong"); 
                console.log(error)
            }
        };
        getOrders();
    }, [page]);


    console.log(orders)
    return (
        <div className="m-5">
            <div className="flex items-center pb-5 gap-2">
                <Package className="mt-1" />
                <h1 className="font-medium text-2xl">Orders</h1>

            </div>
            <div className=" p-5 border rounded shadow">

                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] font-semibold  bg-black text-white rounded px-4 py-2">
                    <p>Customer</p>
                    <p>Status</p>
                    <p>Total</p>
                    <p>Date</p>
                </div>

                {orders.map(order => (
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border rounded px-4 py-2 my-2">
                        <p className="capitalize">{order.user.name}</p>
                        <p className=" w-fit px-4 rounded-2xl bg-green-300">{order.paymentMethod}</p>
                        <p>₹{order.totalAmount}</p>
                        <p>{new Date(order.createdAt).toLocaleDateString("en-IN")}</p>
                        <ExternalLink strokeWidth={1.4} size={20} />
                    </div>
                ))}
                <div className="flex gap-5  w-fit p-2 rounded">
                    <button
                        className="border-black rounded px-2 py-1 disabled:border-none disabled:text-gray-500 disabled:cursor-not-allowed border "
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}>
                        <SquareChevronLeft className="inline pr-1 -mt-1" />
                        <span className=" font-medium  ">Back</span>

                    </button>
                    <button
                        className="border border-black rounded px-2 py-1 disabled:border-none disabled:text-gray-500 disabled:cursor-not-allowed cursor-pointer"
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}>
                        <span className=" font-medium  pr-1 ">Next</span>
                        <SquareChevronRight className="inline  -mt-1" size={21} />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default AdminOrders;