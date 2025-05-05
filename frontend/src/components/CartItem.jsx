import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { motion } from "framer-motion";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company } = cartItem;

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center p-4 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Product Image */}
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="ml-4 flex-grow">
        <h3 className="font-medium font-['Kanit'] text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm font-['Montserrat'] text-gray-500">{company}</p>
        <p className="font-bold text-green-700 mt-1">{formatPrice(price)}</p>
      </div>

      {/* Quantity Selector */}
      <div className="ml-4">
        <label className="block text-xs text-gray-500 mb-1">Quantity</label>
        <select
          name="amount"
          id="amount"
          className="block w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={amount}
          onChange={handleAmount}
        >
          {generateAmountOptions(amount + 5)}
        </select>
      </div>

      {/* Remove Button */}
      <button
        onClick={removeItemFromTheCart}
        className="ml-4 p-2 text-red-600 hover:text-red-800 transition-colors"
        aria-label="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default CartItem;
