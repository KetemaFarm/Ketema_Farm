import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";
import { generateAmountOptions } from "../utils";
import { FeaturedTools } from "../components";
import { tools } from "../utils";

export const loader = async () => {
  // const tools = await axios.get("http://localhost:8085/toolPosts");
  // // const featuredTools = await axios.get("http://localhost:8082/featuredTools");

  // return { tools: tools.data };
  return null;
};

const SingleTool = () => {
  // const { tools } = useLoaderData();
  const { id } = useParams();
  const { image, title, location, description, category, price } =
    tools[id - 1];
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const dispatch = useDispatch();
  const cartProduct = {
    cartID: id + "tool",
    productID: id,
    image,
    title,
    price,
    amount,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section className="mt-24">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {location}
          </h4>

          <p className="mt-3 text-xl">{category}</p>

          <p className="mt-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
          </div>

          {/* AMOUNT  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize my-2">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>

          {/* CART BUTTON */}
          <div className="mt-10 ">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
      <FeaturedTools text="Suggested Tools" />
    </section>
  );
};
export default SingleTool;
