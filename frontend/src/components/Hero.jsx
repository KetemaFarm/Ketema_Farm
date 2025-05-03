import { Link } from "react-router-dom";
import hero from "../assets/heroImg.jpg";
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-3 justify-start items-center">
      <div className="mx-3 flex flex-col items-center lg:items-start  lg:ml-10 ">
        <p className="text-4xl font-bold text-center tracking-tight sm:text-5xl lg:text-6xl font-['Montserrat']  lg:text-start ">
          Your Urban Farming Marketplace Grow, Sell, Thrive!
        </p>

        <p className="mt-8 leading-6 font-['Montserrat'] text-sm  text-center lg:text-start  ">
          Buy fresh farm products, rent urban land, or sell your harvest – all
          in one place." "Join as a buyer, landowner, or seller to grow your
          city’s green future.
        </p>
        <div className="mt-10   flex flex-row gap-4 justify-center lg:self-start">
          <Link
            to="products"
            className="btn btn-primary font-['Kanit'] bg-green-900 border-1 border-green-900"
          >
            Browse Products
          </Link>
          <Link
            to="lands"
            className="btn btn-primary font-['Kanit'] bg-green-900 border-1 border-green-900"
          >
            VIew Land Listings
          </Link>
        </div>
      </div>
      <img src={hero} alt="hero Image" className="w-200 lg:w-140" />
    </div>
  );
};
export default Hero;
