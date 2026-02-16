import { useState } from "react";

function ProductImages({ images }) {
    console.log(images)
    const [featuredIndex, setFeaturedIndex] = useState(0)
    const allImages = [
        images.featured.url,
        ...[...images.gallery].sort((a, b) => a.order - b.order).map(img => img.url)
    ];

    console.log(allImages);


    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className=" md:flex-8 md:order-2 ">

                <img className="rounded-md" src={allImages[featuredIndex]} />
            </div>
            <div className="md:flex-1 md:order-1 flex md:flex-col gap-2  overflow-auto">
                {allImages.map((img, index) => (
                    <img key={index} src={img}
                        className={`w-15 md:w-25 rounded-md cursor-pointer ${featuredIndex === index ? " border p-1" : ""}`}
                        onClick={() => setFeaturedIndex(index)} />
                ))}
            </div>
        </div>
    );
}

export default ProductImages