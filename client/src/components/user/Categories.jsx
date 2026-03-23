import { Link } from "react-router-dom";

function Categories() {

    const data = [
        {
            img: 'https://res.cloudinary.com/dtpzcjkra/image/upload/v1770811355/oddfinds/products/container1-webp-1770811353744.webp',
            category: 'container'
        },
        {
            img: 'https://res.cloudinary.com/dtpzcjkra/image/upload/v1771051694/kitchen-tool_ktyp9f.webp',
            category: 'kitchen'
        },
        {
            img: 'https://res.cloudinary.com/dtpzcjkra/image/upload/v1771051761/sipper_eri6a6.webp',
            category: 'sipper'
        },
        {
            img: 'https://res.cloudinary.com/dtpzcjkra/image/upload/v1771051832/light_vsht8h.webp',
            category: 'gadget'
        },

    ]
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            {data.map((item, index) => (
                <div key={index} className="text-center">
                    <Link to={`product/category/${item.category}`}>
                        <img src={item.img} className="rounded-lg" />
                        <p className="text-lg pt-4 capitalize">{item.category}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default Categories;