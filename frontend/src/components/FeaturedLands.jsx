import { Link } from "react-router-dom";
import LandsGrid from "./LandsGrid";

const FeaturedLands = () => {
  return (
    <section className="mt-20">
      <div>
        <h1 className="text-2xl font-bold font-['Montserrat'] text-amber-900 text-center">
          Featured Land Listings
        </h1>
        <LandsGrid />
      </div>
      <div className="py-8 mx-auto flex items-center">
        <Link
          to="lands"
          className="capitalize px-4 py-2  text-amber-900 font-['Kanit'] border-1 border-green-950 hover:bg-amber-900 hover:text-gray-100 inline-block mx-auto rounded-lg"
        >
          View all lands
        </Link>
      </div>
    </section>
  );
};
export default FeaturedLands;
