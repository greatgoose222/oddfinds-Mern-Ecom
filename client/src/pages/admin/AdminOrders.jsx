import api from "@/utils/api"
import { ExternalLink, Package, SquareChevronLeft, SquareChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import OrderSheet from "./OrderSheet";

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [open, setOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState({})

    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await api.get('/api/order', {
                    params: { page, limit: 7 },
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


    // console.log(orderDetails)
    return (
        <div className="bg-[#FCF8F8] rounded-2xl m-5 h-[94vh]">
            <div className="p-5">
                <div className="flex items-center pb-5 gap-2">
                    <Package className="mt-1" />
                    <h1 className="font-medium text-2xl">Orders</h1>

                </div>
                <div className=" p-5 border rounded-2xl shadow">

                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] font  bg-[#F5AFAF] text-black rounded-md px-4 py-4">
                        <p>Customer</p>
                        <p>Total</p>
                        <p>Date</p>
                        <p>Mode</p>
                        <p>Status</p>
                    </div>

                    {orders.map(order => (
                        <div key={order._id}
                            className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] border border-gray-200 rounded-md px-4 py-3 my-2 bg-white">
                            <p className="capitalize">{order.user.name}</p>
                            <p>₹{order.totalAmount}</p>
                            <p>{new Date(order.createdAt).toLocaleDateString("en-IN")}</p>
                            <p className=" w-fit px-4 rounded-md bg-green-300">{order.paymentMethod}</p>
                            <p>{order.paymentStatus}</p>
                            <button onClick={() => {
                                setOpen(true)
                                setOrderDetails(order)
                            }}>
                                view details
                            </button>
                        </div>
                    ))}
                    {open && <OrderSheet strokeWidth={1.4} size={20}
                        onClose={() => setOpen(false)}
                        title={'Order Details'}
                        order={orderDetails} />}

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
        </div>

    );
}

export default AdminOrders;