import { CiSearch } from "react-icons/ci";
import useStore from "../../store/store"; // adjust path as needed
import { Link } from "react-router";
const Search = () => {
  const { searchQuery, setSearchQuery } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add additional search logic here if needed
  };

  return (
    <form className="sm:relative" onSubmit={handleSubmit}>
      <div className="flex flex-row sm:absolute sm:top-10 left-[-70px] md:static">
        <input
          type="text"
          className="w-50 lg:w-90 h-8 rounded-l-md focus:outline-none border-2 border-gray-300 font-['Kanit'] text-xs pl-2 text-gray-400"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link
          to="/products"
          type="submit"
          className="bg-green-900 lg:w-20 lg:text-xs font-['Rubik'] h-8 flex flex-row justify-center items-center text-[10px] p-1 w-15 rounded-r-md text-gray-200"
        >
          Search
        </Link>
      </div>
    </form>
  );
};

export default Search;
