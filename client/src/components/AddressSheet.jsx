import { X } from "lucide-react";
import SaveAddress from "./SaveAddress";


function AddressSheet({ onClose, title }) {
  {
    return (
      <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"
          onClick={onClose} />

        {/* modal / bottom sheet */}
        <div className="relative w-full md:max-w-md bg-white rounded-t-2xl md:rounded-xl p-4 animate-slideUp md:animate-fadeIn ">

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