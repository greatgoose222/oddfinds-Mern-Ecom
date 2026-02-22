function OrderDetails({ onClose, order }) {
    console.log(order)
    return (
        <div className="flex flex-col gap-2">
            <div className=" border border-gray-400 rounded-md px-2 py-1">
                <p><span className="font-medium">OrderID</span> #{order._id}</p>
                <p><span className="font-medium">Paymnt Method :</span> {order.paymentMethod} ( {order.paymentStatus} )</p>
                <p className="font-medium">Shipping Address :</p>
                <p className="first-letter:capitalize">{order.address.fullName} ( {order.address.phone} )</p>
                <p className="">{order.address.addressLine}, {order.address.city}, {order.address.state},{order.address.pincode}</p>
            </div>

            <div className="flex flex-col">
                <p className="font-bold ">Order Items</p>
                {order.orderItems.map(item => (
                    <div key={item._id} className=" border border-gray-400 rounded-md px-2 py-1 mt-2">
                        <p>{item.name} <span className="font-bold">x{item.quantity}</span> - ₹<span className="font-medium">{item.price * item.quantity}</span></p>
                    </div>
                ))}

                <p className="ml-auto pt-2"><span className="font-medium">Total:</span> ₹{order.totalAmount}</p>

            </div>
        </div>
    );
}

export default OrderDetails;