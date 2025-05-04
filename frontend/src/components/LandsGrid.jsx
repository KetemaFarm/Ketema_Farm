import { Link, useLoaderData } from "react-router-dom";
import { lands } from "../utils";

const LandsGrid = () => {
  // const { lands } = useLoaderData();
  const featuredLands = lands.slice(0, 3);
  

  return (
    <div className="pt-12 flex flex-row justify-center flex-wrap gap-8 ">
      {featuredLands.map((land) => {
        const { title, price, image } = land;
        return (
          <Link
            key={land.id}
            to={`/lands/${land.id}`}
            className="card w-70 flex flex-col justify-center items-center shadow-xl hover:shadow-2xl transition duration-300 border-1 border-amber-900 "
          >
            <figure className="p-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-productName capitalize tracking-wider font-['Montserrat']">
                {title}
              </h2>
              <span className="text-secondary font-['Montserrat']">
                {price}Br Per care
              </span>
              <button className="font-['Kanit'] bg-amber-900 text-gray-100 p-1 rounded-lg w-50 ">
                View details
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default LandsGrid;
