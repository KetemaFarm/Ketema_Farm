import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-green-950">
      <div className="py-8 flex flex-row gap-6 justify-center sm:gap-16 sm:justify-between mx-14 flex-wrap font-['Montserrat']  items-start space-y-4 md:flex-row space-x-0 lg:space-x-8 md:items-start">
        {/* LOGO */}
        <div className=" hidden lg:flex lg:flex-col space-y-2 max-w-sm items-center md:items-start">
          <img src={logo} alt="logo" className="w-40 h-auto invert" />
          <p className="text-gray-100 text-sm">
            Cultivate Connections in the City
          </p>
        </div>
        {/* CONTACT INFO */}
        <div className="flex flex-col space-y-2 ">
          <h4 className="font-bold text-gray-300 text-lg mb-2">
            Contact Information
          </h4>
          <p className="text-sm">
            <HiLocationMarker className="inline text-gray-100" />
            <span className="text-gray-100 px-2 py-1">
              732 Despard St, Atlanta
            </span>
          </p>
          <p className="text-sm">
            <MdEmail className="inline text-gray-100" />
            <span className="text-gray-100 px-2 py-1">+97 888 8888</span>
          </p>
          <p className="text-sm">
            <FaPhoneAlt className="inline text-gray-100" />
            <span className="text-gray-100 px-3 py-1">info@traveller.com</span>
          </p>
        </div>
        {/* QUICK LINK */}
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h4 className="font-bold text-lg mb-2 text-gray-300">Quick Link</h4>
          <Link
            to="/"
            className="duration-200 hover:text-gray-200 hover:font-medium text-sm text-gray-100"
          >
            Home
          </Link>
          <Link
            to="about"
            className="duration-200 hover:text-gray-200 hover:font-medium text-sm text-gray-100"
          >
            About Us
          </Link>
          <Link
            to="lands"
            className="duration-200 hover:text-gray-200 hover:font-medium text-sm text-gray-100"
          >
            Lands
          </Link>
          <Link
            to="products"
            className="text-gray-100 duration-200 hover:text-gray-200 hover:font-medium text-sm"
          >
            Products
          </Link>
        </div>
        {/* FOLLOW US */}
        <div className="flex flex-col space-y-2 items-center  md:items-start">
          <h4 className="font-bold text-lg mb-2 text-gray-300">Follow US</h4>
          <SocialLinks />
        </div>
      </div>
      <div className="bg-green-950 text-gray-100 py-8 text-center font-['Kanit']">
        <p>Copyright © All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
