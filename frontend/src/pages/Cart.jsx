import { useSelector } from "react-redux";
import { CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((store) => store.userState.user);
  const numItemsInCart = useSelector((store) => store.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <h1 className="text-5xl font-bold mt-24">Your Cart is empty</h1>;
  }

  return (
    <section className="mt-24">
      <h1 className="text-5xl font-bold">Shopping Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              Proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cart;
