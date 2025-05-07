// Order.jsx
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import {
  CustomerInformationForm,
  ProductPage,
  SelectDeliveryMethod,
} from "../feautures";
import { nextStep, prevStep, setStep } from "../feautures/order/orderSlice";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { step } = useSelector((state) => state.order);

  const handleSubmit = () => {
    toast.success("Order submitted successfully!");
    navigate("/order-success");
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
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

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Progress Indicator */}
        <div className="p-8 border-b border-gray-200">
          <nav className="flex items-center justify-center">
            <ol className="flex items-center space-x-4 sm:space-x-8">
              {[1, 2, 3].map((stepNumber) => (
                <li key={stepNumber} className="flex items-center">
                  <button
                    onClick={() =>
                      stepNumber < step && dispatch(setStep(stepNumber))
                    }
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-medium transition-colors ${
                      step === stepNumber
                        ? "bg-blue-600 text-white shadow-md"
                        : step > stepNumber
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {stepNumber}
                  </button>
                  {stepNumber < 3 && (
                    <div
                      className={`w-12 sm:w-16 h-1 transition-colors ${
                        step > stepNumber ? "bg-green-100" : "bg-gray-200"
                      }`}
                    />
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {stepTitles[step]}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {stepDescriptions[step]}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-8">
          <div className="space-y-6">
            {step === 1 && <CustomerInformationForm />}
            {step === 2 && <ProductPage />}
            {step === 3 && <SelectDeliveryMethod />}

            {/* Navigation Buttons */}
            <div className="pt-8 flex justify-between border-t border-gray-200">
              {step > 1 ? (
                <button
                  onClick={() => dispatch(prevStep())}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={step === 3 ? handleSubmit : () => dispatch(nextStep())}
                className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg text-white transition-colors shadow-md ${
                  step === 3
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
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
