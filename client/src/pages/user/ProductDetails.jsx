import api from "@/utils/api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart } from "@/redux/cartSlice";
import { openCart } from "@/redux/uiSlice";
import { useDispatch } from "react-redux";
import ProductImages from "@/components/ProductImages";

function ProductDetails() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await api.get(
                    `/api/product/${slug}`,
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

        <div>
            <div className="bg-[#c06136]">
                <p className="px-5 py-3 text-white txt-md lg:text-lg lg:max-w-6xl mx-auto">Cash On Delivery + 7 Days Replacement​</p>
            </div>
            <div className="p-5 lg:max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                <div className="flex-5">
                    <ProductImages images={product.images} />
                </div>
                <div className="flex-4 flex flex-col gap-2" >
                    <h1 className="text-4xl font-medium">{product.name}</h1>
                    <div className="flex gap-1">
                        <p className="text-3xl font-medium text-[#c06136]">₹{product.sellingPrice}</p>
                        <p className=" text-3xl  text-gray-400 line-through">₹{product.price}</p>
                    </div>
                    <button onClick={() => {
                        dispatch(addToCart(product))
                        dispatch(openCart())
                    }}
                        className="py-4 px-2 text-2xl font-medium  mt-4 bg-amber-700 rounded-sm w-full text-white">
                        Add To Cart
                    </button>
                    <img className="py-5" src="https://res.cloudinary.com/dtpzcjkra/image/upload/v1771180977/trust_b5cdpu.webp" alt="" />
                    <p className="font-semibold text-3xl">Product Description</p>
                    <p>{product.description}</p>
                </div>

            </div>

        </div>
    );
}

export default ProductDetails;
