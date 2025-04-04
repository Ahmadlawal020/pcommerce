// import {
//   FaGasPump,
//   FaChargingStation,
//   FaOilCan,
//   FaTruckMoving,
// } from "react-icons/fa";

// const products = [
//   {
//     icon: <FaGasPump className="h-10 w-10 text-green-600" />,
//     title: "Petrol",
//     subtitle: "PMS",
//   },
//   {
//     icon: <FaChargingStation className="h-10 w-10 text-green-600" />,
//     title: "Diesel",
//     subtitle: "AGO",
//   },
//   {
//     icon: <FaOilCan className="h-10 w-10 text-green-600" />,
//     title: "Lubricants",
//     subtitle: "Engine Oils",
//   },
//   {
//     icon: <FaTruckMoving className="h-10 w-10 text-green-600" />,
//     title: "Logistics",
//     subtitle: "Fuel Delivery",
//   },
// ];

// const ProductSection = () => {
//   return (
//     <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
//       <div className="text-center mb-10">
//         <h2 className="text-green-600 text-sm font-semibold tracking-wide">
//           Our Products
//         </h2>
//         <p className="text-black text-3xl font-bold mt-2">
//           What are you ordering today?
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
//           >
//             {product.icon}
//             <p className="mt-4 text-lg font-semibold text-green-700">
//               {product.title}
//             </p>
//             <p className="text-gray-600 text-sm">{product.subtitle}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

import { FaGasPump, FaChargingStation, FaTruckMoving } from "react-icons/fa";
import { FaFireBurner } from "react-icons/fa6";
import { GiFuelTank } from "react-icons/gi";

const products = [
  {
    icon: <FaGasPump className="h-12 w-12 text-green-700" />,
    title: "Petrol",
    subtitle: "Premium Motor Spirit (PMS)",
  },
  {
    icon: <FaChargingStation className="h-12 w-12 text-green-700" />,
    title: "Diesel",
    subtitle: "Automotive Gas Oil (AGO)",
  },
  {
    icon: <FaFireBurner className="h-12 w-12 text-green-700" />,
    title: "Cooking Gas",
    subtitle: "LPG",
  },
  {
    icon: <GiFuelTank className="h-12 w-12 text-green-700" />,
    title: "jet feul",
    subtitle: "JET A-1",
  },
];

const ProductSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-green-700 uppercase rounded-full bg-green-50">
            Our Products
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What are you ordering today?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-50">
                {product.icon}
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                {product.title}
              </h3>
              <p className="mt-2 text-base text-gray-500">{product.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
