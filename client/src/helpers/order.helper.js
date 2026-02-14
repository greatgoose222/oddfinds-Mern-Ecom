import axios from 'axios';
import toast from 'react-hot-toast';



export const handleCodOrder = async (address, paymentMethod, cartItems, totalPrice, navigate) => {

    const orderItems = cartItems.map((item) => {
        const featuredImage = item.images?.featured?.url
        console.log(featuredImage)
        return {
            product: item._id,
            name: item.name,
            image: featuredImage || "",
            price: item.price,
            quantity: item.quantity,
        };
    });


    try {
        await axios.post(
            'http://localhost:3000/api/order/cod',
            {
                orderItems,
                address,
                paymentMethod,
                totalAmount: totalPrice,
            },
            { withCredentials: true }
        );

        toast.success("Order placed successfully");
        localStorage.removeItem("cart");
        navigate("/payment-success");

    } catch (error) {
        console.error(error);
        toast.error("Failed to place order");
    }
};


export const handleOnlineOrder = async (address, paymentMethod, cartItems, totalPrice, navigate) => {

    const orderItems = cartItems.map((item) => {
        const featuredImage = item.images?.featured?.url
        return {
            product: item._id,
            name: item.name,
            image: featuredImage || "",
            price: item.price,
            quantity: item.quantity,
        };
    });


    try {
        const keyData = await axios.get('http://localhost:3000/api/order/getkey',
            { withCredentials: true }
        );

        const response = await axios.post(
            'http://localhost:3000/api/order/online',
            {
                orderItems,
                address,
                paymentMethod,
                totalAmount: totalPrice
            },
            { withCredentials: true }
        );

        if (!window.Razorpay) {
            toast.error("Razorpay failed to load");
            return;
        }

        const options = {
            key: keyData.data.key, // Replace with your Razorpay key_id
            amount: totalPrice, // Amount is in currency subunits.
            currency: 'INR',
            name: 'OddFinds',
            description: 'Test Transaction',
            order_id: response.data.rzpOrder.id, // This is the order_id created in the backend
            handler: async function (razorpayResponse) {
                const verifyRes = await axios.post("http://localhost:3000/api/order/payment-verification",
                    razorpayResponse,
                    { withCredentials: true }
                );

                if (verifyRes.data.success) {
                    localStorage.removeItem("cart");
                    navigate("/payment-success");
                } else {
                    toast.error("Payment verification failed");
                }
            }, prefill: {
                name: 'Gaurav Kumar',
                email: 'gaurav.kumar@example.com',
                contact: '9999999999'
            },
            modal: {
                ondismiss: function () {
                    toast.error("Payment cancelled");
                }
            },
            theme: {
                color: '#F37254'
            },
        };

        const rzp = new Razorpay(options);
        rzp.open();

    } catch (error) {
        console.error(error);
        toast.error("Failed to place order");
    }
}