// import AllProducts from "@/components/AllProducts";
import ProductSection from "@/components/ProductSection";



function Home() {
    return (
        <div className="p-5 lg:max-w-6xl mx-auto">
            <div className="my-5">
                <img className="rounded-xl h-80 md:h-110 w-auto object-cover object-center" src="https://res.cloudinary.com/dtpzcjkra/image/upload/v1770814379/home-upscale_ixu4kt.webp" alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-medium">Exclusive <span className="text-[#c06135]">Launches</span> Of The Week</h1>
                <p className="text-lg mb-5">Shop our Latest-selling favorites, loved by customers.</p>
                <ProductSection categoryName={"kitchen"} limitValue={4} />
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-medium">Our <span className="text-[#c06135]">All Products</span> From Store</h1>
                <p className="text-lg mb-5">Keep scrolling Through Our Complete Catalogue</p>
                <ProductSection />
            </div>

        </div>
    );
}

export default Home;
