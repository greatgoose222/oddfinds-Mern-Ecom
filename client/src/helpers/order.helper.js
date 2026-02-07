import axios from 'axios';
import toast from 'react-hot-toast';


export const handleCodOrder = async (address, paymentMethod, cartItems, totalPrice) => {

    if (!cartItems || cartItems.length === 0) {
        toast.error("Cart is empty");
        return;
    }


    const orderItems = cartItems.map((item) => {
        const featuredImage = item.images?.find(
            (img) => img.isFeatured === true
        );
        console.log(featuredImage)
        return {
            product: item._id,
            name: item.name,
            image: featuredImage?.url || "",
            price: item.price,
            quantity: item.quantity,
        };
    });

    const paymentStatus = paymentMethod === "cod" ? "pending" : "paid";

    try {
        await axios.post(
            'http://localhost:3000/api/order/cod',
            {
                orderItems,
                address,
                paymentMethod,
                paymentStatus,
                totalAmount: totalPrice,
            },
            { withCredentials: true }
        );

        toast.success("Order placed successfully");
        // localStorage.removeItem("cart"); // optional but recommended
    } catch (error) {
        console.error(error);
        toast.error("Failed to place order");
    }
};


export const handleOnlineOrder = async (totalPrice) => {
    try {
        const keyData = await axios.get('http://localhost:3000/api/order/getkey',
            { withCredentials: true }
        );

        const response = await axios.post(
            'http://localhost:3000/api/order/online',
            {
                totalAmount: totalPrice,
            },
            { withCredentials: true }
        );
        console.log(response.data)

        const options = {
            key: keyData.data.key, // Replace with your Razorpay key_id
            amount: totalPrice, // Amount is in currency subunits.
            currency: 'INR',
            name: 'OddFinds',
            description: 'Test Transaction',
            order_id: response.data.order.id, // This is the order_id created in the backend
            callback_url: 'http://localhost:3000/api/order/payment-verification', // Your success URL
            prefill: {
                name: 'Gaurav Kumar',
                email: 'gaurav.kumar@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#F37254'
            },
        };

        const rzp = new Razorpay(options);
        rzp.open();


        toast.success("Order placed successfully");
    } catch (error) {
        console.error(error);
        toast.error("Failed to place order");
    }
}