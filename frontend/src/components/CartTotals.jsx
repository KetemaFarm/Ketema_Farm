import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { motion } from "framer-motion";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (store) => store.cartState
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <h2 className="text-xl font-bold font-['Rubik'] text-gray-800 mb-4">
        Order Summary
      </h2>
      <div className="space-y-3">
        {/* SUBTOTAL */}
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </div>
        {/* SHIPPING */}
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </div>

        {/* TAX */}
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>
        {/* TOTAL */}
        <div className="flex justify-between py-4">
          <span className="text-lg font-bold text-gray-800">Order Total</span>
          <span className="text-lg font-bold text-green-700">
            {formatPrice(orderTotal)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CartTotals;
