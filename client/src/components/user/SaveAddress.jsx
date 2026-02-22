// import { updateUser } from "@/redux/authSlice";
import { saveAddress } from "@/redux/authSlice";
import api from "@/utils/api"
import { use, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function SaveAddress({ onClose }) {
  const dispatch = useDispatch()

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    addressLine: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/user/saveAddress', { ...address }, {
        withCredentials: true,
      })
      console.log(response.data.address)
      dispatch(saveAddress(response.data.address))
      toast.success("address added");
      onClose?.()
    } catch (error) {
      console.log(error)
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
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="relative">
        <span className={labelClass}>Pincode</span>
        <input
          name="pincode"
          placeholder="6-digit pincode"
          className={inputClass}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative">
        <span className={labelClass}>Full Name</span>
        <input
          name="fullName"
          placeholder="Enter full name"
          className={inputClass}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative">
        <span className={labelClass}>Phone Number</span>
        <input
          name="phone"
          type="tel"
          placeholder="10-digit mobile number"
          className={inputClass}
          onChange={handleChange}
          required
        />
      </div>

      {/* ✅ NEW: Address Textarea */}
      <div className="relative">
        <span className={labelClass}>Address</span>
        <textarea
          name="addressLine"
          placeholder="House No, Building, Street, Area, Landmark"
          rows={2}
          className={inputClass}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative">
        <span className={labelClass}>City</span>
        <input
          name="city"
          placeholder="City"
          className={inputClass}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative">
        <span className={labelClass}>State</span>
        <select
          name="state"
          className={selectClass}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md font-medium"
      >
        Add Address
      </button>
    </form>
  );
}
