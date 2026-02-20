import { useEffect, useState } from "react";
import api from "@/utils/api"
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { openCart } from "@/redux/uiSlice";
import ProductGridSkeleton from "./ProductGridSkeleton";
import { Link, useParams } from "react-router-dom";

const CategoryProducts = ({ limitValue = 10 }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const { category } = useParams();


    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const response = await api.get('/api/product', {
                    params: { category, limit: limitValue },
                    withCredentials: true
                })
                setProducts(response.data.products);
            } catch (error) {
                // setError("Something went wrong"); 
                console.log(error)
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, [category, limitValue]);


    // if (loading) return <p>Loading...</p>;
    if (loading) return <ProductGridSkeleton num={limitValue} />;

    return (
        <div className="p-5 lg:max-w-6xl mx-auto ">
            <div className="mb-5">
                <h1 className="text-3xl font-medium">Our Top <span className="text-[#c06135]">{category} </span>Products</h1>
                <p className="text-xl">Transform Your Home With Our Unique Finds !</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {products.map((product) => {
                    return <div key={product._id}>
                        <Link to={`/product/${product.slug}`}>
                            <img src={product?.images?.featured?.url} className="rounded-sm" />
                            <p>{product.name}</p>
                        </Link>
                        <div className="flex gap-1">
                            <p className="font-medium">₹{product.sellingPrice}</p>
                            <p className="text-gray-400 line-through">₹{product.price}</p>
                        </div>

                    </div>
                })}

            </div>


        </div>
    );
};

export default CategoryProducts;
