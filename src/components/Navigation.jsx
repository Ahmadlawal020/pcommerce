import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavigationBar = () => {
  return (
    <div className="bg-white max-md:absolute z-10 max-md:bg-transparent">
      <div className="w-screen max-w-screen-2xl  overflow-hidden flex items-center justify-between h-20 ml-auto mr-auto max-sm:px-2 max-md:px-4 max-lg:px-8 max-xl:px-16 px-23 max-sm:h-14">
        <div className=" mx-1 mr-8">
          <div className="max-md:hidden">
            <Logo />
          </div>
          <div className=" md:hidden">
            <Logo variant={"black"} />
          </div>
        </div>

        <div className="flex items-center gap-4 mx-3">
          <Link className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 max-md:text-white  hover:text-green-600 transition-colors border border-gray-200 rounded-md hover:border-green-300 whitespace-nowrap cursor-pointer">
            Check Order Status
          </Link>
          <Link
            to={"/auth"}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-md shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
          >
            Login
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
