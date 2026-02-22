const RefundPolicy = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-3xl font-semibold mb-6">
                Replacement & Refund Policy
            </h1>

            <p className="mb-4">
                We have a 7-day replacement policy, which means you have 7 days after
                receiving your item to request a replacement.
            </p>

            <p className="mb-6 font-medium">
                Note: You must notify us within 5 days of delivery to initiate a
                replacement.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Eligibility for Replacement
            </h2>
            <p className="mb-4">
                To be eligible for a replacement, your item must be in the same condition
                that you received it—unworn or unused, with tags, and in its original
                packaging. You’ll also need the receipt or proof of purchase.
            </p>

            <p className="mb-6">
                We offer replacement only if the received item is wrong or defective.
            </p>

            <h2 className="text-xl font-semibold mb-2">How to Start a Replacement</h2>
            <p className="mb-6">
                To start a replacement, you can contact us at{" "}
                <a
                    href="mailto:support@oddfinds.in"
                    className="text-blue-600 hover:underline"
                >
                    support@oddfinds.in
                </a>
                . Please note that replacement items must be sent to the address provided
                via our support email.
            </p>

            <p className="mb-6">
                You can always contact us for any return-related questions at{" "}
                <a
                    href="mailto:support@oddfinds.in"
                    className="text-blue-600 hover:underline"
                >
                    support@oddfinds.in
                </a>
                .
            </p>

            <h2 className="text-xl font-semibold mb-2">Damages and Issues</h2>
            <p className="mb-6">
                Please inspect your order upon reception and contact us immediately if the
                item is defective, damaged, or if you receive the wrong item, so that we
                can evaluate the issue and make it right.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Exceptions / Non-returnable Items
            </h2>
            <p className="mb-4">
                Certain types of items cannot be returned, such as perishable goods (food,
                flowers, or plants), custom products (special orders or personalized
                items), and personal care goods (beauty products).
            </p>

            <p className="mb-6">
                We also do not accept returns for hazardous materials, flammable liquids,
                gases, sale items, or gift cards. Please contact us if you have questions
                about a specific item.
            </p>

            <h2 className="text-xl font-semibold mb-2">Exchanges</h2>
            <p className="mb-6">
                The fastest way to ensure you get what you want is to return the item you
                have, and once the return is accepted, make a separate purchase for the new
                item.
            </p>

            <h2 className="text-xl font-semibold mb-2">Refunds</h2>
            <p className="mb-4">
                We will notify you once we’ve received and inspected your return and let
                you know whether the refund is approved.
            </p>

            <p className="mb-4">
                If approved, you’ll be automatically refunded to your original payment
                method within 10 business days. Please note that it may take additional
                time for your bank or credit card company to process the refund.
            </p>

            <p>
                If more than 15 business days have passed since your refund was approved,
                please contact us at{" "}
                <a
                    href="mailto:support@oddfinds.in"
                    className="text-blue-600 hover:underline"
                >
                    support@oddfinds.in
                </a>
                .
            </p>
        </div>
    );
};

export default RefundPolicy;
