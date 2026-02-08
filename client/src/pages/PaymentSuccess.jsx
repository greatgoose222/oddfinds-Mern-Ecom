import { Link } from "react-router-dom";

export default function PaymentSuccess() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-sm w-full">

                <div className="text-5xl mb-4">✅</div>

                <h1 className="text-2xl font-semibold text-gray-800">
                    Order Placed Successfully
                </h1>

                <p className="text-gray-600 mt-2">
                    Thank you for your purchase.
                    Your order has been received.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Go to Home
                </Link>

            </div>
        </div>
    );
}
