import { Link, useLoaderData } from "react-router-dom";

const ToolsGrid = () => {
  // const { tools } = useLoaderData();
  const tools = [
    {
      id: 1,
      title: "Tool 1",
      description: "This is a high-quality tool 1 for urban farming.",
      category: "pesticide",
      price: 35.76,
      location: "Jimma",
      image: "https://example.com/tool_images/tool_1.jpg",
    },
    {
      id: 2,
      title: "Tool 2",
      description: "This is a high-quality tool 2 for urban farming.",
      category: "starter-kit",
      price: 64.11,
      location: "Dessie",
      image: "https://example.com/tool_images/tool_2.jpg",
    },
    {
      id: 3,
      title: "Tool 3",
      description: "This is a high-quality tool 3 for urban farming.",
      category: "fertilizer",
      price: 60.46,
      location: "Mekelle",
      image: "https://example.com/tool_images/tool_3.jpg",
    },
  ];

  return (
    <div className="pt-12 flex flex-row justify-center flex-wrap gap-8 ">
      {tools.map((product) => {
        const { title, price, image } = product;
        return (
          <Link
            key={tools.id}
            to={`/products/${tools.id}`}
            className="card w-70 shadow-xl hover:shadow-2xl transition duration-300 border-1 border-green-900 "
          >
            <figure className="p-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-productName capitalize tracking-wider font-['Montserrat']">
                {title}
              </h2>
              <span className="text-secondary font-['Montserrat']">
                {price}Br
              </span>
              <button className="font-['Kanit'] bg-green-900 text-gray-100 p-1 rounded-lg w-50 ">
                View details
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ToolsGrid;
