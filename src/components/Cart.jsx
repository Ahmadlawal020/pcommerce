const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is currently empty</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-4 py-2 bg-gray-200 rounded-full text-lg disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="px-4 py-2 bg-gray-200 rounded-full text-lg"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between font-bold text-xl text-gray-900">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
