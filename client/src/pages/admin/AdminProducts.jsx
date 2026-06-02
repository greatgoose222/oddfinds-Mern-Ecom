import { useEffect, useState } from "react";
import api from "@/utils/api"
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
                const response = await api.get('/api/product', {
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

    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`/api/product/${id}`, {
                withCredentials: true
            })
            setProducts(prev =>
                prev.filter(p => String(p._id) !== String(id))
            );
        } catch (error) {
            setError("Something went wrong"); console.log(error)
        }
    }


    // if (loading) return <p>Loading...</p>;
    if (loading) return <ProductGridSkeleton num={5} />;

    return (
        <div className="p-5">

            <button className="bg-black text-white text-md font-medium rounded px-4 py-2 mb-5 hover:bg-black/80 cursor-pointer">All Product</button>


            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 ">

                {products.map((product) => {
                    return <div key={product._id} className="relative">
                        <Link to={`/product/${product.slug}`}>
                            <img src={product?.images?.featured?.url} className="rounded-lg" />
                            <p className="mt-1">{product.name}</p>
                        </Link>
                        <button className=" absolute top-2 left-2 cursor-pointer hover:bg-red-400 bg-red-500 px-2 rounded text-sm text-amber-50"
                            onClick={() => handleDelete(product._id)}>Delete</button>
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
