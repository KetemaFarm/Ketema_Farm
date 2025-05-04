import axios from "axios";
import MarketPlace from "../components/MarketPlace";

export const loader = async () => {
  const response = await axios.get(
    "https://ketema-farm-backend.onrender.com/api/products/"
  );
  return response.data;
  // return null;
};

const Products = () => {
  return (
    <div className="mt-24">
      <MarketPlace  />
    </div>
  );
};
export default Products;
