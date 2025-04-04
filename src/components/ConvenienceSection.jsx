import React from "react";
import { FaPiggyBank, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <FaPiggyBank className="text-green-600 w-8 h-8 mb-3 mx-auto" />,
    title: "Cost Savings",
    description:
      "Save time and money with our competitive pricing and hassle-free delivery options.",
  },
  {
    icon: <FaShieldAlt className="text-green-600 w-8 h-8 mb-3 mx-auto" />,
    title: "Reliable Services",
    description: "Count on us for dependable fuel wherever you need it.",
  },
];

const ConvenienceSection = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-10 items-center">
      {/* Left Image */}
      <div className="flex-1 w-full">
        <div
          className="w-full h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-lg shadow-md"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/14401866/pexels-photo-14401866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 w-full">
        <h3 className="text-sm text-green-600 font-semibold uppercase mb-2">
          Convenience
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
          Experience Unmatched Convenience & Reliability
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-10">
          Enjoy the peace of mind that comes with our reliable and efficient
          solutions.
        </p>

        {/* Feature Cards - No background, icons centered on top */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 mb-10 text-center max-lg:space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" max-lg:flex  max-lg:items-start max-lg:gap-4 max-lg:text-start "
            >
              <div className="md:flex-shrink-0">{feature.icon}</div>
              <div>
                <h4 className="text-base sm:text-lg font-medium text-gray-800 mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/learn-more")}
            className="bg-green-600 hover:bg-green-700 text-white text-base font-semibold rounded-md px-6 py-3 transition-all duration-300 cursor-pointer"
          >
            Learn More
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-white  text-green-600 text-base font-semibold rounded-md px-6 py-3  hover:bg-gray-100 transition cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConvenienceSection;
