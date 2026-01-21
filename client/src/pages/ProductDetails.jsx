import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart } from "@/redux/cartSlice";
import { openCart } from "@/redux/uiSlice";
import { useDispatch } from "react-redux";

function ProductDetails() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/product/${slug}`,
                    { withCredentials: true }
                );

                setProduct(response.data.product);
                // console.log(response.data.product)
            } catch (err) {
                toast.error("Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div className="p-5 lg:max-w-6xl mx-auto md:flex justify-between gap-10">
            <div className="flex-1">
                <img className="rounded-md" src={product.images.find((x) => x.isFeatured === true).url} alt={product.name} />
            </div>
            <div className="flex-1" >
                <h1>{product.name}</h1>
                <p>₹{product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => {
                    dispatch(addToCart(product))
                    dispatch(openCart())
                }}
                    className="p-1.5 bg-amber-700 rounded-sm w-full text-amber-50">
                    Add To Cart
                </button>
            </div>


        </div>
    );
}

export default ProductDetails;
