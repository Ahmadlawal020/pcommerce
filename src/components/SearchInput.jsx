import { CiSearch } from "react-icons/ci";

const SearchInput = ({ searchBtnStyle }) => {
  return (
    <form className={`w-auto flex-grow ${searchBtnStyle}`}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none max-md:hidden">
          <CiSearch
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 max-md:p-2 ps-10 max-md:ps-4 text-sm max-md:leading-[1.7rem] text-gray-900 border border-gray-300  focus:border-green-500 rounded-lg bg-white focus:ring-green-500  "
          placeholder="Search for products, brands, and categories"
          required
          aria-label="Search for products, brands, and categories"
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-[green] hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-[green] font-medium rounded-lg text-sm px-4 py-2 max-md:px-2 max-md:py-1"
          aria-label="Submit search"
        >
          <span className="max-md:hidden">Search</span>
          <span className="md:hidden">
            <CiSearch
              className="w-4 h-4 text-white font-bold text-lg"
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
