// import axios from "axios";
import {
  Hero,
  FeaturedProducts,
  TestimonialCarousel,
  FeaturedLands,
  FeaturedTools,
} from "../components";

export const loader = async () => {
  // const products = await axios.get("http://localhost:8080/featuredProducts");
  // const lands = await axios.get("http://localhost:8081/featuredLands");
  // const tools = await axios.get("http://localhost:8082/featuredTools");
  // return { products: products.data, lands: lands.data, tools: tools.data };
  return null;
};

const Home = () => {
  return (
    <div className="mt-10">
      <Hero />
      <FeaturedProducts />
      <FeaturedLands />
      <FeaturedTools />
      <TestimonialCarousel />
    </div>
  );
};
export default Home;
