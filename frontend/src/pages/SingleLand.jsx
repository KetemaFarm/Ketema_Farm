import axios from "axios";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FeaturedLands } from "../components";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
export const loader = async () => {
  // const lands = await axios.get("http://localhost:8084/landPosts");

  // return { lands: lands.data };
  return null;
};

const lands = [
  {
    id: 1,
    title: "Sunny Rooftop in Bole",
    description:
      "Perfect rooftop space with direct sunlight, ideal for small-scale vegetable farming.",
    location: "Bole, Addis Ababa",
    image: "https://example.com/images/rooftop1.jpg",
    category: "rooftop",
    price: 1000,
  },
  {
    id: 2,
    title: "Balcony Space in Condominium",
    description: "Cozy balcony space suitable for herb and vertical farming.",
    location: "CMC, Addis Ababa",
    image: "https://example.com/images/balcony1.jpg",
    category: "balcony",
    price: 500,
  },
  {
    id: 3,
    title: "Backyard Land for Lease",
    description: "100 sqm land available for planting seasonal crops.",
    location: "Sarbet, Addis Ababa",
    image: "https://example.com/images/land1.jpg",
    category: "land",
    price: 2500,
  },
  {
    id: 4,
    title: "Urban Rooftop with Water Access",
    description:
      "Spacious rooftop with built-in water tank, great for hydroponics.",
    location: "Lideta, Addis Ababa",
    image: "https://example.com/images/rooftop2.jpg",
    category: "rooftop",
    price: 1500,
  },
  {
    id: 5,
    title: "Spare Balcony in Apartment",
    description: "East-facing balcony with good morning sun for indoor plants.",
    location: "Megenagna, Addis Ababa",
    image: "https://example.com/images/balcony2.jpg",
    category: "balcony",
    price: 600,
  },
  {
    id: 6,
    title: "Empty Plot in Gullele",
    description:
      "120 sqm fenced land, secure and suitable for cooperative gardening.",
    location: "Gullele, Addis Ababa",
    image: "https://example.com/images/land2.jpg",
    category: "land",
    price: 3000,
  },
  {
    id: 7,
    title: "Rooftop Garden Opportunity",
    description:
      "Flat concrete rooftop ideal for setting up container gardens.",
    location: "Kirkos, Addis Ababa",
    image: "https://example.com/images/rooftop3.jpg",
    category: "rooftop",
    price: 1200,
  },
  {
    id: 8,
    title: "Small Land Patch Near School",
    description: "Suitable for leafy greens or educational farming projects.",
    location: "Gelan, Oromia",
    image: "https://example.com/images/land3.jpg",
    category: "land",
    price: 1800,
  },
  {
    id: 9,
    title: "Balcony with Shade Net",
    description:
      "South-facing balcony with netted covering for plant protection.",
    location: "Ayat, Addis Ababa",
    image: "https://example.com/images/balcony3.jpg",
    category: "balcony",
    price: 700,
  },
  {
    id: 10,
    title: "Unfinished Rooftop in New Building",
    description: "Raw rooftop surface ready to be customized for farming.",
    location: "Summit, Addis Ababa",
    image: "https://example.com/images/rooftop4.jpg",
    category: "rooftop",
    price: 1100,
  },
  {
    id: 11,
    title: "Accessible Land for Rent",
    description: "Corner plot with road access, ideal for vegetable plots.",
    location: "Burayu, Oromia",
    image: "https://example.com/images/land4.jpg",
    category: "land",
    price: 2200,
  },
  {
    id: 12,
    title: "Compact Balcony in Studio Apartment",
    description: "Great for 1-2 grow boxes or vertical planters.",
    location: "Piasa, Addis Ababa",
    image: "https://example.com/images/balcony4.jpg",
    category: "balcony",
    price: 400,
  },
  {
    id: 13,
    title: "Large Rooftop with City View",
    description: "200 sqm space, suitable for collective urban farming groups.",
    location: "Kazanchis, Addis Ababa",
    image: "https://example.com/images/rooftop5.jpg",
    category: "rooftop",
    price: 2000,
  },
  {
    id: 14,
    title: "Shaded Land in Quiet Area",
    description: "Perfect for partial-sun crops like ginger or turmeric.",
    location: "Addis Ketema, Addis Ababa",
    image: "https://example.com/images/land5.jpg",
    category: "land",
    price: 1600,
  },
  {
    id: 15,
    title: "Corner Balcony in Duplex",
    description: "Receives great airflow and afternoon sun.",
    location: "Merkato, Addis Ababa",
    image: "https://example.com/images/balcony5.jpg",
    category: "balcony",
    price: 650,
  },
  {
    id: 16,
    title: "Private Rooftop with Stairs",
    description:
      "Easy access via external stairs; ideal for a rooftop greenhouse.",
    location: "Jemo, Addis Ababa",
    image: "https://example.com/images/rooftop6.jpg",
    category: "rooftop",
    price: 1300,
  },
  {
    id: 17,
    title: "Community Garden Land Plot",
    description:
      "Shared space with other urban farmers, 50 sqm allocated per person.",
    location: "Asko, Addis Ababa",
    image: "https://example.com/images/land6.jpg",
    category: "land",
    price: 1000,
  },
  {
    id: 18,
    title: "Shady Balcony for Herbs",
    description: "Partial sun, ideal for mint, basil, and indoor leafy greens.",
    location: "Mekanisa, Addis Ababa",
    image: "https://example.com/images/balcony6.jpg",
    category: "balcony",
    price: 450,
  },
  {
    id: 19,
    title: "High Rooftop for Beekeeping",
    description:
      "Rooftop space with wind protection, ideal for urban beekeeping.",
    location: "Gotera, Addis Ababa",
    image: "https://example.com/images/rooftop7.jpg",
    category: "rooftop",
    price: 1400,
  },
  {
    id: 20,
    title: "Unused Backyard Plot",
    description: "90 sqm of open backyard space, previously used for maize.",
    location: "Kolfe, Addis Ababa",
    image: "https://example.com/images/land7.jpg",
    category: "land",
    price: 1900,
  },
];

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
      <FeaturedLands />
    </section>
  );
};
export default SingleLand;
