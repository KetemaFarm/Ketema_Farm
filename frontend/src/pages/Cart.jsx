import { useSelector } from "react-redux";
import { CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((store) => store.userState.user);
  const numItemsInCart = useSelector((store) => store.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <h1 className="text-xl font-['Montserrat'] text-red-200 mt-20 font-bold h-screen flex flex-row justify-center">
        Your Cart is empty
      </h1>
    );
  }

  return (
    <section className="mt-8 mb-10">
      <h1 className="text-2xl font-bold font-['Kanit'] text-green-900 text-center">
        Shopping Cart
      </h1>
      <div className="mt-12 flex flex-col justify-center gap-4 items-center lg:gap-10 lg:items-start lg:flex-row ">
        <div className=" flex flex-row justify-center items-center gap-8 flex-wrap md:flex-col">
          <CartItemsList />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary  mt-8 text-gray-100 w-70 md:w-90 bg-green-900 font-['Rubik'] "
            >
              Proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn   mt-8 text-gray-100 w-70 md:w-90 bg-green-900 font-['Rubik'] "
            >
              Please Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cart;
