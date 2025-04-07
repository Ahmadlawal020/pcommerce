import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const NavigationBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`${
        isHomePage ? "max-md:absolute max-md:bg-transparent" : "bg-white"
      } z-50`}
    >
      <div className="w-screen max-w-screen-2xl overflow-hidden flex items-center justify-between h-20 min-h-18 ml-auto mr-auto max-sm:px-2 max-md:px-4 max-lg:px-8 max-xl:px-16 px-23 max-sm:h-14">
        <div className="mx-1 mr-8">
          {isHomePage ? (
            <>
              <div className="max-md:hidden">
                <Logo />
              </div>
              <div className="md:hidden">
                <Logo variant={"black"} />
              </div>
            </>
          ) : (
            <Logo />
          )}
        </div>

        <div className="flex items-center gap-4 mx-3">
          <Link
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium ${
              isHomePage ? "max-md:text-white" : "text-gray-700"
            } hover:text-green-600 transition-colors border border-gray-200 rounded-md hover:border-green-300 whitespace-nowrap cursor-pointer`}
          >
            Check Order Status
          </Link>
          <Link
            to={"/place-order"}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-md shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
          >
            Place Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav>
      <NavigationBar />
    </nav>
  );
};

export default Navigation;
