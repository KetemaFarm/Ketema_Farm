import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import NavLinks from "./NavLinks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.userState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  const numItemsInCart = useSelector((store) => store.cartState.numItemsInCart);
  return (
    <nav className="relative z-40 bg-[url(/KetemaFarm/frontend/src/assets/NavBack.png)] bg-cover bg-center ">
      <div className="navbar  px-2 mt-4 sm:mt-16 md:mt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button bg-gray-100 border-1 border-green-900 lg:hidden"
            >
              <FaBarsStaggered className="size-5 text-green-950" />
            </label>
            <div>
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content"></div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here - NavLinks should render its own <li> items */}
                  <NavLinks />
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <ul className="menu menu-horizontal">
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-end mr-3 flex flex-row gap-3">
          <NavLink
            to="cart"
            className="btn bg-gray-100 btn-circle btn-md border-1 border-green-950 "
          >
            <div className="indicator">
              <BsCart3 className="size-6 text-green-900" />
              <button className="badge badge-sm badge-primary indicator-item z-0 bg-green-800">
                {numItemsInCart}
              </button>
            </div>
          </NavLink>

          {user ? (
            user.role === "BUYER" ? (
              <div className="dropdown">
                <label tabIndex={0} className="btn mr-24 p-2">
                  <IoMdSettings className="size-10 text-gray-500" />
                </label>
                <ul className="menu dropdown-content bg-transparent rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                    <a>+251978451334</a>
                  </li>
                  <li>
                    <a>Abebe Kebede</a>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to={`/profile`}>
                <FaUserCircle className="size-10 text-green-900  cursor-pointer" />
              </Link>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
