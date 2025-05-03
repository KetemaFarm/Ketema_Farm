import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
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
                  {/* Sidebar content here */}
                  <li>
                    <NavLinks />
                  </li>
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

        <div className="navbar-end mr-3">
          <NavLink
            to="cart"
            className="btn bg-gray-100 btn-circle btn-md ml-4 border-1 border-green-950"
          >
            <div className="indicator">
              <BsCart3 className="size-6 text-green-900" />
              <button className="badge badge-sm badge-primary indicator-item z-0 bg-green-800">
                {numItemsInCart}
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
