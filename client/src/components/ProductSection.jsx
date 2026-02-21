import { useEffect, useState } from "react";
import api from "@/utils/api"
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { openCart } from "@/redux/uiSlice";
import ProductGridSkeleton from "./ProductGridSkeleton";
import { Link } from "react-router-dom";

const ProductSection = ({ categoryName, limitValue }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()


    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const response = await api.get('/api/product', {
                    params: { category: categoryName, limit: limitValue },
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
    }, [categoryName, limitValue]);


    // if (loading) return <p>Loading...</p>;
    if (loading) return <ProductGridSkeleton num={limitValue} />;

    return (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 ">
            {products.map((product) => {
                return <div key={product._id}>
                    <Link to={`/product/${product.slug}`}>
                        <img src={product?.images?.featured?.url} className="rounded-lg" />
                        <p className="mt-1">{product.name}</p>
                    </Link>
                    <div className="flex gap-1">
                        <p className="font-medium">₹{product.sellingPrice}</p>
                        <p className="text-gray-400 line-through">₹{product.price}</p>
                    </div>

                </div>
            })}
        </div>
    );
};

export default ProductSection;
