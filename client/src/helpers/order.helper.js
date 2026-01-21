import axios from 'axios';
import toast from 'react-hot-toast';


export const handleOrder = async (address, paymentMethod, cartItems, totalPrice) => {

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
            'http://localhost:3000/api/order/create',
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
