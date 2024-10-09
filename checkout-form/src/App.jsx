import React from "react";

const App = () => {
  return (
    <div>
      <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Complete Registration Payment
        </h1>

        {/* Personal Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Personal Details
          </h2>

          {/* Address Line */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="address"
            >
              Address Line
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              id="address"
              placeholder="P.O. Box 1223"
            />
          </div>

          {/* City and State */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                id="city"
                placeholder="Arusha"
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="state"
              >
                State
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                id="state"
                placeholder="Arusha, Tanzania"
              />
            </div>
          </div>

          {/* Postal Code */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="postal-code"
            >
              Postal Code
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              id="postal-code"
              placeholder="9090"
            />
          </div>
        </div>

        {/* Card Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Card Details
          </h2>

          {/* Cardholder's Name */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="card-name"
            >
              Cardholder's Name
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              id="card-name"
              placeholder="Seen on your card"
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="card-number"
            >
              Card Number
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              id="card-number"
              placeholder="Seen on your card"
            />
          </div>

          {/* Expiry and CVC */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="expiry"
              >
                Expiry
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                id="expiry"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="cvc"
              >
                CVC
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                id="cvc"
                placeholder="123"
              />
            </div>
          </div>
        </div>

        {/* Bank Selection Dropdown */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Select Your Bank
          </h2>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg"
            id="bank"
          >
            <option>Select your bank</option>
            <option>Bank of America</option>
            <option>Chase Bank</option>
            <option>Citibank</option>
            <option>Wells Fargo</option>
            <option>HSBC</option>
          </select>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Payment Methods
          </h2>
          <div className="flex space-x-4">
            <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <a
                href="https://www.visa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.freepik.com/256/11041/11041038.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
                  alt="Visa"
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>
            <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <a
                href="https://www.mastercard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="your-mastercard-image-link-from-freepik"
                  alt="Mastercard"
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>
            <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="your-paypal-image-link-from-freepik"
                  alt="PayPal"
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>
            <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <a
                href="https://pay.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="your-googlepay-image-link-from-freepik"
                  alt="Google Pay"
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button className="w-full p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
