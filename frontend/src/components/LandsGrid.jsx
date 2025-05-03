import { Link, useLoaderData } from "react-router-dom";

const LandsGrid = () => {
  // const { lands } = useLoaderData();
  const lands = [
    {
      id: 1,
      title: "Sunny Rooftop in Bole",
      description:
        "Perfect rooftop space with direct sunlight, ideal for small-scale vegetable farming.",
      location: "Bole, Addis Ababa",
      image: "https://example.com/images/rooftop1.jpg",
      category: "rooftop",
      price: 1000,
    },
    {
      id: 2,
      title: "Balcony Condominium",
      description: "Cozy balcony space suitable for herb and vertical farming.",
      location: "CMC, Addis Ababa",
      image: "https://example.com/images/balcony1.jpg",
      category: "balcony",
      price: 500,
    },
    {
      id: 3,
      title: "Backyard Land for Lease",
      description: "100 sqm land available for planting seasonal crops.",
      location: "Sarbet, Addis Ababa",
      image: "https://example.com/images/land1.jpg",
      category: "land",
      price: 2500,
    },
  ];

  return (
    <div className="pt-12 flex flex-row justify-center flex-wrap gap-8 ">
      {lands.map((land) => {
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
