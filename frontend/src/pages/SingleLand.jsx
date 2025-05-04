import axios from "axios";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FeaturedLands } from "../components";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { lands } from "../utils";

export const loader = async () => {
  // const lands = await axios.get("http://localhost:8084/landPosts");

  // return { lands: lands.data };
  return null;
};

const SingleLand = () => {
  // const { lands } = useLoaderData();
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const { image, title, location, description, category, price } =
    lands[id - 1];

  return (
    <section className="mt-24">
      <div className="mt-6 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start lg:gap-30">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="size-70 object-cover rounded-lg lg:size-90"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold font-['Rubik'] text-center lg:text-left text-amber-800">
            {title}
          </h1>

          <div className="flex flex-row gap-1 justify-center items-center mt-3 lg:justify-start">
            <span className="font-['Rubik'] font-bold text-lg text-amber-800 ">
              Category:
            </span>
            <p className="text-lg font-['Kanit']">{category}</p>
          </div>
          <div className="flex flex-row gap-1 justify-center items-center mt-3 lg:justify-start">
            <span className="font-['Rubik'] font-bold text-lg text-amber-800 ">
              Price:
            </span>
            <p className="text-lg font-['Kanit']">{price}Br</p>
          </div>
          <div className="flex flex-col gap-1  items-center mt-2 lg:flex-row lg:items-start">
            <span className="font-['Rubik'] font-bold text-md text-amber-800">
              Description:
            </span>
            <p className="mt-1 leading-4 font-['Montserrat'] text-xs w-70">
              {description}
            </p>
          </div>

          {/* AMOUNT  */}
          <div className="flex flex-col items-center gap-8 mt-10 lg:flex-row">
            <div className="flex flex-row gap-5 items-center ">
              <FaMinus
                className="cursor-pointer"
                onClick={() => {
                  if (amount > 1) setAmount(amount - 1);
                }}
              />
              <p className="font-['Montserrat'] font-bold border-1 border-green-800 w-10 p-1 text-center">
                {amount}
              </p>
              <FaPlus
                className="cursor-pointer"
                onClick={() => {
                  setAmount(amount + 1);
                }}
              />
            </div>
          </div>
          <h4 className="text-xl text-neutral-content font-bold font-['Rubik'] text-center mt-12">
            Sold by {location}
          </h4>
        </div>
      </div>
      <FeaturedLands text="Suggested Lands" />
    </section>
  );
};
export default SingleLand;
