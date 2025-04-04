import React from "react";
import { FaGasPump, FaClipboardList, FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: <FaGasPump className="text-green-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Select Your Fuel",
    description: "Choose the type and amount of fuel you need.",
  },
  {
    icon: <FaClipboardList className="text-green-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Choose Deliver or Pickup",
    description: "Pick home deliver or choose to pick up from our depot.",
  },
  {
    icon: <FaTruck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Compelete Your Order",
    description: "pay securely and get your fuel delivered or ready or pickup.",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col-reverse lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-10 items-center">
      {/* Left Section */}
      <div className="flex-1 w-full">
        <h3 className="text-sm text-green-600 font-semibold uppercase mb-2">
          How it works
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-snug">
          Order Fuel in Just 3 Steps
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">{step.icon}</div>
              <div>
                <h4 className="text-base sm:text-lg font-medium text-gray-800">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => navigate("/contact")}
            className="bg-green-600 hover:bg-green-700 text-white text-base font-semibold shadow-md rounded-md px-6 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Need help? Ask us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 w-full">
        <div
          className="w-full h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-lg shadow-md"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1413201610/photo/tanker-truck-with-dangerous-goods-driving-along-a-lonely-road-with-the-sun-in-backlight.jpg?s=1024x1024&w=is&k=20&c=ToQYU6HoSk5tOhg7gj0COnqpJC7qYpzXGmQrZ-4Q9-4=")',
          }}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
