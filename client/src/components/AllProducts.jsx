import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../redux/productSlice'
import { addToCart } from "@/redux/cartSlice";
import { openCart } from "@/redux/uiSlice";


function AllProducts() {
    const dispatch = useDispatch();

    const productData = useSelector(state => state.product);
    const { items, status } = productData

    const { cartItems, tempItems, totalPrice } = useSelector(state => state.cart);
    // console.log(cartItems)
    // console.log(totalPrice)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getProducts())
        }
    }, [status])

    if (status === 'loading') return <p>Loading Products..</p>
    if (status === 'failed') return <p>Failed to Load products</p>
    return (
        <>
            <div className="p-5 lg:max-w-6xl mx-auto">
                <h1 className="text-2xl font-medium">Exclusive Launches Of The Week</h1>
                <p className="text-lg">Shop our Latest-selling favorites, loved by customers.</p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-5">
                    {items.map((product) => {
                        return <div key={product._id}>
                            <img src={product.images[0]} className="rounded-sm" />
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            <button onClick={
                                () => {
                                    dispatch(addToCart(product))
                                    dispatch(openCart())
                                }} className="p-1.5 bg-amber-700 rounded-sm w-full text-amber-50">Add To Cart</button>
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}

export default AllProducts