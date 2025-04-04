import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-10">
      {/* Top CTA Section */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-b border-gray-300 text-center md:text-left">
        {/* Left: Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Fuel Delivery Made Easy
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Get your fuel delivered right to your door!
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button className="w-full sm:w-auto px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition cursor-pointer">
            Order Fuel Products
          </button>
          <button className="w-full sm:w-auto px-4 py-2 text-sm bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 transition cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row justify-between">
        {/* Column 1: Logo + Newsletter */}
        <div className="flex-1">
          <div className="pb-[30px]">
            <Logo />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to our newsletter for the latest updates on features and
            product releases.
          </p>

          <form className="flex items-stretch gap-2 mb-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition whitespace-nowrap cursor-pointer"
            >
              Join Now
            </button>
          </form>

          <p className="text-xs text-gray-500">
            By subscribing, you consent to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and agree to receive updates.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex-1 md:flex md:flex-col md:items-center max-md:pt-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "FAQs",
              "About Us",
              "Contact Us",
              "Terms of Service",
              "Privacy Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-green-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="flex-1 md:flex md:flex-col md:items-center max-md:pt-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Connect</h2>
          <ul className="space-y-1 text-sm text-gray-600">
            {[
              "Facebook",
              "Instagram",
              "YouTube",
              "X (Twitter)",
              "LinkedIn",
            ].map((platform) => (
              <li key={platform}>
                <a href="#" className="hover:text-green-600">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 text-xs text-gray-400 pt-6 pb-6 px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
        <div>
          &copy; {new Date().getFullYear()} Soroman Nigeria Limited. All rights
          reserved.
        </div>
        <div>Powered by SableBox</div>
      </div>
    </footer>
  );
};

export default Footer;
