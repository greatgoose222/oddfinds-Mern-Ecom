import api from "@/utils/api"
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { uploadToCloudinary } from "../../cloudinary/uploadToCloudinary.js";
function NewProduct() {

    const [product, setProduct] = useState({
        description: "",
        name: "",
        images: {
            featured: null,
            gallery: [] // [{ file, order }]
        },
        category: "",
        price: "",
        sellingPrice: "",
        stock: "",
    });

    const [loading, setLoading] = useState(false);
    console.log(product)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleFeaturedImg = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setProduct(prev => ({
            ...prev,
            images: {
                ...prev.images,
                featured: file
            }
        }));
    };


    const handleGalleryImg = (e) => {
        const files = Array.from(e.target.files);

        setProduct(prev => ({
            ...prev,
            images: {
                ...prev.images,
                gallery: files.map((file, index) => ({
                    file,
                    order: index + 1
                }))
            }
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const featuredUpload = product.images.featured ? await uploadToCloudinary(product.images.featured, 'oddfinds/products') : null;

        const galleryUploads = await Promise.all(
            product.images.gallery.map(item =>
                uploadToCloudinary(item.file, 'oddfinds/products')
            )
        );

        const finalProduct = {
            name: product.name,
            description: product.description,
            category: product.category,
            price: Number(product.price),
            sellingPrice: Number(product.sellingPrice),
            stock: Number(product.stock),
            images: {
                featured: featuredUpload,
                gallery: galleryUploads.map((img, index) => ({
                    ...img,
                    order: index + 1
                }))
            }
        };

        try {
            const response = await api.post('/api/product', finalProduct, {
                withCredentials: true,

            })
            console.log(response.data)
            toast.success("product Added");

            setProduct({
                description: "",
                name: "",
                images: { featured: null, gallery: [] },
                category: "",
                price: "",
                sellingPrice: "",
                stock: "",
            });
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    // styles
    const inputClass =
        "w-full border border-gray-300 rounded-md px-3 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-green-500";
    const labelClass =
        "absolute left-3 -top-2 bg-white px-1 text-xs text-gray-500";
    const selectClass =
        "w-full border border-gray-300 rounded-md px-3 py-3 text-sm bg-white focus:outline-none focus:border-green-500";



    return (
        <div className="p-5">
            <div className="flex gap-3">
                <Link to="/admin/products" className="mb-5 font-medium flex items-center gap-3">
                    <X />
                </Link>
                <h1>Add New Product</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="relative">
                    <span className={labelClass}>Featured Image</span>
                    <input
                        className={`${inputClass} block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-900`}
                        type="file"
                        accept="image/*"
                        onChange={handleFeaturedImg}
                    />
                </div>
                <div className="relative">
                    <span className={labelClass}>Gallery Images</span>
                    <input
                        className={`${inputClass} block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-900`}
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleGalleryImg}
                    />
                </div>


                <div className="relative">
                    <span className={labelClass}>Descriptiion</span>
                    <textarea
                        name="description"
                        value={product.description}
                        placeholder="Product Description ...."
                        rows={7}
                        className={inputClass}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="relative">
                    <span className={labelClass}>Name</span>
                    <input
                        name="name"
                        value={product.name}
                        placeholder="Add Product Name"
                        className={inputClass}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="relative">
                    <span className={labelClass}>Category</span>
                    <input
                        name="category"
                        value={product.category}
                        placeholder="Add Product Name"
                        className={inputClass}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="relative">
                    <span className={labelClass}>Price</span>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        placeholder="Add Actual Price"
                        className={inputClass}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="relative">
                    <span className={labelClass}>Selling Price</span>
                    <input
                        type="number"
                        name="sellingPrice"
                        value={product.sellingPrice}
                        placeholder="Add Selling Price"
                        className={inputClass}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div className="relative">
                    <span className={labelClass}>Stock</span>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        placeholder="Add Product Stock"
                        className={inputClass}
                        onChange={handleChange}
                        required
                    />
                </div>



                <button
                    type="submit"
                    className={`w-full py-3 rounded-md font-medium text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"}`}
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Add Product"}
                </button>


            </form>



        </div>

    );
}

export default NewProduct;



