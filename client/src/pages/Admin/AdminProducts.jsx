import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()


    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/api/product', {
                    withCredentials: true
                })
                setProducts(response.data.products);
            } catch (error) {
                setError("Something went wrong"); console.log(error)
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);


    // if (loading) return <p>Loading...</p>;
    if (loading) return <ProductGridSkeleton num={5} />;

    return (
        <div className="p-5">
            <Link to="/admin/new-product">
                <button className="bg-black text-white text-md font-medium rounded px-4 py-2 mb-5 hover:bg-black/80 cursor-pointer">+ Add New Product</button>
            </Link>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 ">

                {products.map((product) => {
                    return <div key={product._id}>
                        <Link to={`/product/${product._id}`}>
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

export default AdminProducts;

