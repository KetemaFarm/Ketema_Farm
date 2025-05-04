import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  const { cartID, title, price, image, amount, company } = cartItem;
  return (
    <div className="flex flex-row justify-center">
      <article
        key={cartID}
        className="flex flex-col md:flex-row md:justify-between md:w-180 xl:w-210 cursor-pointer lg:w-140 justify-center items-center border-1 border-gray-900 w-60 p-2 rounded-xl"
      >
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className=" rounded-lg w-50 md:w-20 object-cover"
        />
        {/* INFO */}
        <div className="">
          {/* TITLE */}
          <h3 className="capitalize font-['Kanit'] mt-2 font-medium">
            {title}
          </h3>
          {/* COMPANY */}
          <p className="font-medium  font-['Montserrat'] text-sm text-center">
            {formatPrice(price)}
          </p>
          {/* COLOR */}
        </div>
        <div className=" flex flex-col justify-center  md:flex-row gap-1 md:gap-2 items-center">
          {/* AMOUNT */}
          <span className="label-text font-['Rubik'] text-center text-xs mt-2">
            Amount
          </span>
          <div className="form-control ">
            <p className="label p-0"></p>
            <select
              name="amount"
              id="amount"
              className="mt-1 focus:outline-none select select-base select-bordered select-xs"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(amount + 5)}
            </select>
          </div>
          {/* REMOVE */}
        </div>
        <button
          className="mt-2 link link-primary link-hover text-xs text-gray-50 p-2 rounded-lg w-20 bg-red-950 font-['Kanit']"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
        {/* PRICE */}
      </article>
    </div>
  );
};
export default CartItem;
