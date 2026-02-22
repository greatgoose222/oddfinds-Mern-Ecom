import { TruckElectric } from "lucide-react";


function ShippingDate() {

    // date from 7 days from now
    const date = new Date();
    date.setDate(date.getDate() + 7);
    const weekday = date.toLocaleDateString("en-IN", { weekday: "long" });
    const month = date.toLocaleDateString("en-IN", { month: "short" });
    const day = date.toLocaleDateString("en-IN", { day: "numeric" });
    const formattedDate = ` ${weekday}, ${month} ${day}`;

    return (
        <div className='p-4 flex gap-2'>
            <TruckElectric size={18} strokeWidth={1.5} />
            <div className='-mt-0.5'>
                <p> <span className='font-medium'>Delivery Date</span>:{formattedDate}</p>
                <p className='text-sm text-green-700 -mt-1'>Free Shipping For You</p>
            </div>
        </div>
    );
}

export default ShippingDate;