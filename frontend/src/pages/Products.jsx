import axios from "axios";
import MarketPlace from "../components/MarketPlace";
import { customFetch } from "../utils";

export const loader = async () => {
  // const response = await customFetch.get("/products/");
  // return response.data;
  return null;
};

const Products = () => {
  return (
    <div className="mt-10">
      <MarketPlace />
    </div>
  );
};
export default Products;
