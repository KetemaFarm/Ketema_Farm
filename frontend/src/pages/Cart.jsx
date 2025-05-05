import { useSelector } from "react-redux";
import { CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const user = useSelector((store) => store.userState.user);
  const numItemsInCart = useSelector((store) => store.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-screen"
      >
        <div className="text-center p-8 rounded-lg bg-white shadow-lg max-w-md">
          <h1 className="text-2xl font-bold font-['Montserrat'] mb-4 text-red-200">
            Your Cart is Empty
          </h1>
          <p className="text-gray-500 mb-6 text-xs font-['Rubik']">
            Looks like you haven't added anything to your cart yet
          </p>
          <Link
            to="/products"
            className="inline-block px-6 py-2 bg-green-800 font-['Kanit'] text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold font-['Kanit'] text-green-900 text-center mb-12">
          Your Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-6">
              <CartItemsList />
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <CartTotals />

              {user ? (
                <Link
                  to="/checkout"
                  className="block w-full mt-6 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-['Rubik'] font-bold rounded-lg text-center transition-colors shadow-md"
                >
                  Proceed to Checkout
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="block w-full mt-6 px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-['Rubik'] font-bold rounded-lg text-center transition-colors shadow-md"
                >
                  Login to Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cart;
