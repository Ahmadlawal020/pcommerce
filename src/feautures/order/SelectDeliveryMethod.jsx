// import React, { useState } from "react";

// const SelectDeliveryMethod = () => {
//   // Dummy state
//   const [formData, setFormData] = useState({
//     deliveryMethod: "delivery",
//     deliveryDetails: {
//       state: "",
//       lga: "",
//       address: "",
//       time: "",
//     },
//     pickupDetails: {
//       depot: "",
//       pickupTime: "",
//     },
//   });

//   // Dummy handler
//   const handleChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Radio buttons group */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Delivery option */}
//         <div
//           className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
//             formData.deliveryMethod === "delivery"
//               ? "border-blue-500 bg-blue-50"
//               : "border-gray-200 hover:border-gray-300"
//           }`}
//           onClick={() => handleChange("deliveryMethod", "delivery")}
//         >
//           <div className="flex items-center gap-3">
//             <input
//               type="radio"
//               name="deliveryMethod"
//               checked={formData.deliveryMethod === "delivery"}
//               onChange={() => {}}
//               className="h-4 w-4 accent-blue-600"
//             />
//             <div>
//               <h4 className="text-base font-semibold text-gray-800">
//                 Delivery
//               </h4>
//               <p className="text-xs text-gray-600">
//                 We'll deliver to your specified address
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Pickup option */}
//         <div
//           className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
//             formData.deliveryMethod === "pickup"
//               ? "border-blue-500 bg-blue-50"
//               : "border-gray-200 hover:border-gray-300"
//           }`}
//           onClick={() => handleChange("deliveryMethod", "pickup")}
//         >
//           <div className="flex items-center gap-3">
//             <input
//               type="radio"
//               name="deliveryMethod"
//               checked={formData.deliveryMethod === "pickup"}
//               onChange={() => {}}
//               className="h-4 w-4 accent-blue-600"
//             />
//             <div>
//               <h4 className="text-base font-semibold text-gray-800">Pickup</h4>
//               <p className="text-xs text-gray-600">
//                 Collect from one of our depots
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Options display area */}
//       {formData.deliveryMethod === "delivery" && (
//         <div className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg mt-4">
//           <div className="grid grid-cols-1 gap-3">
//             {[
//               { label: "State", key: "state", type: "text" },
//               { label: "LGA", key: "lga", type: "text" },
//               { label: "Address", key: "address", type: "text" },
//               {
//                 label: "Delivery Time",
//                 key: "time",
//                 type: "datetime-local",
//               },
//             ].map((field) => (
//               <div key={field.key}>
//                 <label className="block text-xs font-medium text-gray-500 mb-1">
//                   {field.label}
//                 </label>
//                 <input
//                   type={field.type}
//                   className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.deliveryDetails[field.key]}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       deliveryDetails: {
//                         ...prev.deliveryDetails,
//                         [field.key]: e.target.value,
//                       },
//                     }))
//                   }
//                   required
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {formData.deliveryMethod === "pickup" && (
//         <div className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg mt-4">
//           <div className="grid grid-cols-1 gap-3">
//             <div>
//               <label className="block text-xs font-medium text-gray-500 mb-1">
//                 Depot Location
//               </label>
//               <select
//                 className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 value={formData.pickupDetails.depot}
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     pickupDetails: {
//                       ...prev.pickupDetails,
//                       depot: e.target.value,
//                     },
//                   }))
//                 }
//                 required
//               >
//                 <option value="">Select Depot</option>
//                 <option value="Main Depot (Downtown)">
//                   Main Depot (Downtown)
//                 </option>
//                 <option value="Northside Depot">Northside Depot</option>
//                 <option value="Westside Depot">Westside Depot</option>
//                 <option value="Eastside Depot">Eastside Depot</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-xs font-medium text-gray-500 mb-1">
//                 Pickup Time
//               </label>
//               <input
//                 type="datetime-local"
//                 className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 value={formData.pickupDetails.pickupTime}
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     pickupDetails: {
//                       ...prev.pickupDetails,
//                       pickupTime: e.target.value,
//                     },
//                   }))
//                 }
//                 required
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectDeliveryMethod;

import React, { useState } from "react";

const SelectDeliveryMethod = () => {
  // Dummy state
  const [formData, setFormData] = useState({
    deliveryMethod: "delivery",
    deliveryDetails: {
      state: "",
      lga: "",
      address: "",
      time: "",
    },
    pickupDetails: {
      depot: "",
      pickupTime: "",
    },
  });

  // Dummy handler
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Radio buttons group */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delivery option */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
            formData.deliveryMethod === "delivery"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onClick={() => handleChange("deliveryMethod", "delivery")}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="deliveryMethod"
              checked={formData.deliveryMethod === "delivery"}
              onChange={() => {}}
              className="h-4 w-4 accent-blue-600"
            />
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                Delivery
              </h4>
              <p className="text-xs text-gray-600">
                We'll deliver to your specified address
              </p>
            </div>
          </div>
        </div>

        {/* Pickup option */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
            formData.deliveryMethod === "pickup"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onClick={() => handleChange("deliveryMethod", "pickup")}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="deliveryMethod"
              checked={formData.deliveryMethod === "pickup"}
              onChange={() => {}}
              className="h-4 w-4 accent-blue-600"
            />
            <div>
              <h4 className="text-base font-semibold text-gray-800">Pickup</h4>
              <p className="text-xs text-gray-600">
                Collect from one of our depots
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Options display area */}
      {formData.deliveryMethod === "delivery" && (
        <div className="p-6 border-2 border-blue-500 bg-blue-50 rounded-lg mt-6">
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: "State", key: "state", type: "text" },
              { label: "LGA", key: "lga", type: "text" },
              { label: "Address", key: "address", type: "text" },
              { label: "Delivery Time", key: "time", type: "datetime-local" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.deliveryDetails[field.key]}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      deliveryDetails: {
                        ...prev.deliveryDetails,
                        [field.key]: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {formData.deliveryMethod === "pickup" && (
        <div className="p-6 border-2 border-blue-500 bg-blue-50 rounded-lg mt-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Depot Location
              </label>
              <select
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.pickupDetails.depot}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    pickupDetails: {
                      ...prev.pickupDetails,
                      depot: e.target.value,
                    },
                  }))
                }
                required
              >
                <option value="">Select Depot</option>
                <option value="Main Depot (Downtown)">
                  Main Depot (Downtown)
                </option>
                <option value="Northside Depot">Northside Depot</option>
                <option value="Westside Depot">Westside Depot</option>
                <option value="Eastside Depot">Eastside Depot</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Pickup Time
              </label>
              <input
                type="datetime-local"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.pickupDetails.pickupTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    pickupDetails: {
                      ...prev.pickupDetails,
                      pickupTime: e.target.value,
                    },
                  }))
                }
                required
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectDeliveryMethod;
