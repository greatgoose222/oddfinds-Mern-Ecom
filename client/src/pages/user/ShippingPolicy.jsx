const ShippingPolicy = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-3xl font-semibold mb-6">Shipping Policy</h1>

            <p className="mb-6">
                At Oddfinds, we aim to provide efficient delivery services to our customers
                across India.
            </p>

            <h2 className="text-xl font-semibold mb-2">Delivery Timeframe</h2>
            <p className="mb-6">
                All items purchased from our store are shipped pan India and typically
                delivered within 5–7 business days from the date of order placement.
            </p>

            <h2 className="text-xl font-semibold mb-2">Possible Delays</h2>
            <p className="mb-6">
                While we strive to ensure timely delivery, please understand that occasional
                delays may occur due to unforeseen circumstances beyond our control. We
                appreciate your patience and understanding in such situations.
            </p>

            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
                If you have any questions or require assistance regarding your order or
                delivery, please don’t hesitate to reach out to us at{" "}
                <a
                    href="mailto:support@oddfinds.in"
                    className="text-blue-600 hover:underline"
                >
                    support@oddfinds.in
                </a>
                . Our dedicated customer support team is here to help.
            </p>
        </div>
    );
};

export default ShippingPolicy;
