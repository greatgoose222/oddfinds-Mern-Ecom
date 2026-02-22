import { X } from "lucide-react";
import SaveAddress from "./SaveAddress";


function AddressSheet({ onClose, title }) {
  {
    return (
      <div className="fixed inset-0  flex items-end md:items-stretch md:justify-end">

        {/* overlay */}
        <div className="absolute  inset-0 "
          onClick={onClose} />

        {/* modal / bottom sheet */}
        <div className="relative w-full md:w-96 h-auto md:h-full bg-white rounded-t-2xl md:rounded-none p-4 animate-slideUp md:animate-slideLeft">

          <h2 className="text-lg font-semibold mb-4">  {title}</h2>
          <SaveAddress onClose={onClose} />

          <button onClick={onClose} className="absolute top-3 right-3 text-gray-500">
            <X />
          </button>
        </div>
      </div>
    );
  };
}

export default AddressSheet