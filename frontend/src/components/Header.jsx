import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="w-full  flex flex-row p-1 font-['Kanit']  justify-center  bg-green-900 mb-4">
        <div className="flex flex-row gap-x-6 justify-center items-center text-black">
          <Link
            to="/login"
            className="link link-hover text-xs sm:text-sm text-gray-300 hover:text-gray-950 underline transition delay-10"
          >
            Sign in / Guest
          </Link>
          <Link
            to="/register"
            className="link link-hover text-xs sm:text-sm text-gray-300 hover:text-gray-950 underline transition delay-10"
          >
            Create an Account
          </Link>
        </div>
      </div>
      <div className="flex-col gap-3 mx-4 flex  justify-between items-center sm:flex-row sm:justify-between md:pr-6 md:pl-3 mt-5">
        <div className="flex flex-col sm:flex-row  items-center gap-3">
          <img src={logo} alt="logo" className="w-40 sm:w-50" />
        </div>
        <Search />
        <div className="flex flex-row items-center">
          <Link
            to="login"
            className="text-green-900  border-1 border-green-900 hover:bg-green-900 hover:text-green-50 w-20 md:w-18 lg:w-24 lg:text-xs  h-8 flex justify-center items-center font-['Rubik'] text-[10px] md:text-[10px] sm:text-xs sm:w-30  rounded-sm"
          >
            Sell Produce
          </Link>
          <span className="text-3xl px-4 font-['Rubik'] text-green-700 ">
            /
          </span>
          <Link
            to="login"
            className="text-green-900  border-1 border-green-900 hover:bg-green-900 hover:text-green-50 w-20 md:w-18 lg:w-24 lg:text-xs  h-8 flex justify-center items-center font-['Rubik'] text-[10px] md:text-[10px] sm:text-xs sm:w-30  rounded-sm"
          >
            Post Land
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
