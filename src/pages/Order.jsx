const CustomerInformationStep = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            label: "Full Name",
            key: "name",
            type: "text",
            required: true,
          },
          { label: "Company", key: "company", type: "text" },
          {
            label: "Phone",
            key: "phone",
            type: "tel",
            required: true,
          },
          {
            label: "Email",
            key: "email",
            type: "email",
            required: true,
          },
        ].map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={formData[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              placeholder={field.label}
              required={field.required}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductSelectionStep = ({
  productList,
  formData,
  handleProductChange,
  selectedProductsCount,
  calculateTotal,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productList.map((product) => {
          const selected = formData.products[product.id]?.selected;
          const quantity = formData.products[product.id]?.quantity || 0;
          const price =
            formData.products[product.id]?.price || product.basePrice;

          return (
            <div
              key={product.id}
              className={`p-4 border-2 rounded-lg transition-all ${
                selected
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex gap-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md border"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-base font-semibold text-gray-800">
                        {product.name}
                      </h4>
                      <p className="text-xs text-blue-600 font-medium">
                        {product.quality}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={selected || false}
                      onChange={(e) =>
                        handleProductChange(
                          product.id,
                          "selected",
                          e.target.checked
                        )
                      }
                      className="h-4 w-4 accent-blue-600 mt-1"
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{product.desc}</p>
                  <p className="text-xs font-medium text-gray-700 mt-2">
                    Base Price: ${product.basePrice.toFixed(2)}
                  </p>
                </div>
              </div>

              {selected && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        handleProductChange(
                          product.id,
                          "quantity",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Unit Price ($)
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={price}
                      onChange={(e) =>
                        handleProductChange(
                          product.id,
                          "price",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedProductsCount > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Order Summary
          </h4>
          <div className="space-y-3">
            {Object.entries(formData.products)
              .filter(([_, data]) => data?.selected)
              .map(([id, data]) => {
                const product = productList.find((p) => p.id === id);
                return (
                  <div
                    key={id}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center py-2 border-b border-gray-100"
                  >
                    <p className="text-sm font-medium text-gray-800">
                      {product?.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {data.quantity || 0} × ${(data.price || 0).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      ${((data.quantity || 0) * (data.price || 0)).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleProductChange(id, "selected", false)}
                      className="text-sm text-red-500 hover:text-red-700 font-medium justify-self-end"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
            <span className="text-base font-medium text-gray-600">Total:</span>
            <span className="text-xl font-bold text-gray-800">
              ${calculateTotal()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const DeliveryMethodStep = ({ formData, handleChange, setFormData }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
            formData.deliveryMethod === "delivery"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 hover:border-gray-300"
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
          {formData.deliveryMethod === "delivery" && (
            <div className="mt-4 grid grid-cols-1 gap-3">
              {[
                { label: "State", key: "state", type: "text" },
                { label: "LGA", key: "lga", type: "text" },
                { label: "Address", key: "address", type: "text" },
                {
                  label: "Delivery Time",
                  key: "time",
                  type: "datetime-local",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
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
          )}
        </div>

        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
            formData.deliveryMethod === "pickup"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 hover:border-gray-300"
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
          {formData.deliveryMethod === "pickup" && (
            <div className="mt-4 grid grid-cols-1 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
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
                <label className="block text-xs font-medium text-gray-500 mb-1">
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
          )}
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const Order = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    products: {
      productA: {},
      productB: {},
      productC: {},
      productD: {},
    },
    deliveryMethod: "",
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

  const productList = [
    {
      id: "productA",
      name: "Product A",
      quality: "High Quality",
      desc: "This is a premium product made with the best materials.",
      img: "https://via.placeholder.com/100",
      basePrice: 49.99,
    },
    {
      id: "productB",
      name: "Product B",
      quality: "Standard Quality",
      desc: "Standard performance and efficiency for everyday use.",
      img: "https://via.placeholder.com/100",
      basePrice: 29.99,
    },
    {
      id: "productC",
      name: "Product C",
      quality: "Premium Quality",
      desc: "Top-tier choice for businesses needing reliability.",
      img: "https://via.placeholder.com/100",
      basePrice: 79.99,
    },
    {
      id: "productD",
      name: "Product D",
      quality: "Economy",
      desc: "Cost-effective option without compromising utility.",
      img: "https://via.placeholder.com/100",
      basePrice: 19.99,
    },
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProductChange = (productId, field, value) => {
    setFormData((prev) => ({
      ...prev,
      products: {
        ...prev.products,
        [productId]: {
          ...prev.products[productId],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Order Submitted:", formData);
    toast.success("Order submitted successfully!");
    navigate("/order-success");
  };

  const calculateTotal = () => {
    return Object.entries(formData.products)
      .filter(([_, data]) => data?.selected)
      .reduce((total, [_, data]) => {
        return total + (data.quantity || 0) * (data.price || 0);
      }, 0)
      .toFixed(2);
  };

  const selectedProductsCount = Object.values(formData.products).filter(
    (product) => product?.selected
  ).length;

  const validateStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.phone || !formData.email) {
        toast.error("Please fill in all required fields");
        return false;
      }
    } else if (step === 2 && selectedProductsCount === 0) {
      toast.error("Please select at least one product");
      return false;
    } else if (step === 3 && !formData.deliveryMethod) {
      toast.error("Please select a delivery method");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    setStep((s) => s + 1);
  };

  const stepTitles = {
    1: "Customer Information",
    2: "Select Products",
    3: "Delivery Method",
  };

  const stepDescriptions = {
    1: "Please provide your contact details",
    2: "Choose the products you want to order",
    3: "Choose how you want to receive your order",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 4000,
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <nav className="flex items-center justify-center">
            <ol className="flex items-center space-x-8">
              {[1, 2, 3].map((stepNumber) => (
                <li key={stepNumber} className="flex items-center">
                  <button
                    onClick={() => stepNumber < step && setStep(stepNumber)}
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step === stepNumber
                        ? "bg-blue-600 text-white"
                        : step > stepNumber
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-200 text-gray-600"
                    } font-medium`}
                  >
                    {stepNumber}
                  </button>
                  {stepNumber < 3 && (
                    <div
                      className={`w-16 h-1 ${
                        step > stepNumber ? "bg-green-100" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-medium text-gray-800">
              {stepTitles[step]}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {stepDescriptions[step]}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 space-y-8">
            {/* Step Components */}
            {step === 1 && (
              <CustomerInformationStep
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {step === 2 && (
              <ProductSelectionStep
                productList={productList}
                formData={formData}
                handleProductChange={handleProductChange}
                selectedProductsCount={selectedProductsCount}
                calculateTotal={calculateTotal}
              />
            )}
            {step === 3 && (
              <DeliveryMethodStep
                formData={formData}
                handleChange={handleChange}
                setFormData={setFormData}
              />
            )}

            {/* Navigation Buttons */}
            <div className="pt-6 flex justify-between border-t border-gray-200">
              <div>
                {step > 1 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                    Back
                  </button>
                )}
              </div>
              <button
                onClick={() => (step === 3 ? handleSubmit() : handleNext())}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white transition-colors ${
                  step === 3
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={step === 2 && selectedProductsCount === 0}
              >
                {step === 3 ? (
                  <>
                    <CheckCircleIcon className="h-4 w-4" />
                    Submit Order
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRightIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
