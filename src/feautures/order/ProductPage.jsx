import { useState } from "react";
import { ProductCard, Cart } from "../../components";

const ProductPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      details: "Bluetooth 5.0, 30hr battery life",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Fitness tracker with heart rate monitor",
      details: "Water resistant, 7-day battery",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Portable Speaker",
      description: "Compact Bluetooth speaker with rich sound",
      details: "IPX7 waterproof, 12hr playtime",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      description: "Durable backpack with USB charging port",
      details: 'Water-resistant, fits 15.6" laptop',
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const proceedToCheckout = () => {
    alert("Proceeding to checkout! Implement your checkout flow here.");
    // In a real app, you would navigate to a checkout page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <Cart
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onProceed={proceedToCheckout}
      />
    </div>
  );
};

export default ProductPage;
