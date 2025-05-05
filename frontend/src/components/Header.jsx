import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Search from "./Search";
import { useSelector } from "react-redux";
import LinkButton from "./LinkButton";

const Header = () => {
  const user = useSelector((store) => store.userState.user);

  return (
    <header>
      {user ? (
        ""
      ) : (
        <div className="w-full  flex flex-row p-1 font-['Kanit']  justify-center  bg-green-900 mb-4">
          <div className="flex flex-row gap-x-6 justify-center items-center text-black">
            <Link
              to="/login"
              className="link link-hover text-xs sm:text-sm text-gray-300 hover:text-gray-100 underline transition delay-10"
            >
              Sign in / Guest
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm text-gray-300 hover:text-gray-100 underline transition delay-10"
            >
              Create an Account
            </Link>
          </div>
        </div>
      )}
      <div className="flex-col gap-3 mx-4 flex  justify-between items-center sm:flex-row sm:justify-between md:pr-6 md:pl-3 mt-5">
        <div className="flex flex-col sm:flex-row  items-center gap-3">
          <img src={logo} alt="logo" className="w-40 sm:w-50" />
        </div>
        <Search />
        <div className="flex flex-row items-center">
          {user ? (
            user.role === "FARMER" ? (
              <LinkButton path="postProducts" text="Sell Product" />
            ) : user.role === "BUYER" ? (
              ""
            ) : user.role === "LANDOWNER" ? (
              <LinkButton path="postLands" text="Post Land" />
            ) : (
              ""
            )
          ) : (
            <>
              <LinkButton path="login" text="Sell Product" />
              <span className="text-3xl px-4 font-['Rubik'] text-green-700 ">
                /
              </span>
              <LinkButton path="login" text="Post Land" />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
