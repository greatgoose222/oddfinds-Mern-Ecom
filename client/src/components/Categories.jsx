function Categories() {

    const data = [
        {
            img: 'https://res.cloudinary.com/dtpzcjkra/image/upload/v1770811355/oddfinds/products/container1-webp-1770811353744.webp',
            name: 'Container'
        },
        {
            img: 'https://res.cloudinary.com/dtpzcjkra/image/upload/v1771051694/kitchen-tool_ktyp9f.webp',
            name: 'Kitchen Tools'
        },
        {
            img: 'https://res.cloudinary.com/dtpzcjkra/image/upload/v1771051761/sipper_eri6a6.webp',
            name: 'Sipper'
        },
        {
            img: 'https://res.cloudinary.com/dtpzcjkra/image/upload/v1771051832/light_vsht8h.webp',
            name: 'Lighting'
        },

    ]
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            {data.map((item, index) => (
                <div key={index} className="text-center">
                    <img src={item.img} className="rounded-sm" />
                    <p className="text-2xl">{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Categories;