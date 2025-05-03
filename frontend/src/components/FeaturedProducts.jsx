import { Link } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <section className="pt-24">
      <div>
        <h1 className="text-2xl font-bold font-['Montserrat'] text-green-900 text-center">
          Featured Marketplace Products
        </h1>
        <ProductsGrid />
      </div>
      <div className="py-8 mx-auto flex items-center">
        <Link
          to="products"
          className="capitalize px-4 py-2  text-green-900 font-['Kanit'] border-1 border-green-950 hover:bg-green-900 hover:text-gray-100 inline-block mx-auto rounded-lg"
        >
          View all product
        </Link>
      </div>
    </section>
  );
};
export default FeaturedProducts;
