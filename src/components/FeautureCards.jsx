import {
  CubeIcon,
  CreditCardIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    icon: <CubeIcon className="h-10 w-10 text-white mx-auto" />,
    title: "Variety Products",
    description: "Choose from various fuel products to suit your needs.",
  },
  {
    icon: <ShoppingCartIcon className="h-10 w-10 text-white mx-auto" />,
    title: "Easy online Ordering",
    description: "place your order in just few clicks.",
  },
  {
    icon: <CreditCardIcon className="h-10 w-10 text-white mx-auto" />,
    title: "Secure Payments",
    description: "Order with confidence using our scure payment options.",
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-green-600 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
        {cards.map((card, idx) => (
          <div key={idx} className="p-2">
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-green-100">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
