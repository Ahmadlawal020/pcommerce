const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-700 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <p className="text-xs text-gray-500 mb-4">{product.details}</p>

        {/* "More Details" Link */}
        <button
          onClick={() => onViewDetails(product.id)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 inline-block"
        >
          More Details
        </button>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
