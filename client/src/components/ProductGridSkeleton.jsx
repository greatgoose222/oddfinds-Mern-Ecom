

const ProductGridSkeleton = ({ num }) => {

    const ProductCardSkeleton = () => {
        return (
            <div className="animate-pulse space-y-2">
                <div className="w-full aspect-square bg-gray-300 rounded-sm" />
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-1/3" />
                <div className="h-9 bg-gray-300 rounded-sm w-full" />
            </div>
        );
    };

    return (
        <div className="p-5 lg:max-w-6xl mx-auto">
            <div className="h-7 bg-gray-300 rounded w-1/2 animate-pulse" />
            <div className="h-5 bg-gray-300 rounded w-2/3 mt-2 animate-pulse" />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-5">
                {Array.from({ length: num }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};

export default ProductGridSkeleton;
