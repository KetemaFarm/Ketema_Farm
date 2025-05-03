import { Link, useLoaderData } from "react-router-dom";

const ProductsGrid = () => {
  // const { products } = useLoaderData();
  const products = [
    {
      id: 1,
      title: "Golden Wheat",
      description: "Fresh organic wheat, perfect for baking.",
      farmerName: "John Doe",
      category: "cereals",
      price: 15.99,
      size: "1kg",
      image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Sunflower Flower",
      description: "Bright yellow sunflower flowers for decoration.",
      farmerName: "Alice Green",
      category: "flower",
      price: 4.5,
      size: "bunch",
      image:
        "https://images.unsplash.com/photo-1616224917135-8aeca963e892?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Tomato Seedlings",
      description: "Healthy tomato seedlings for your garden.",
      farmerName: "Carlos Silva",
      category: "seedling",
      price: 2.99,
      size: "10 seedlings",
      image:
        "https://images.unsplash.com/photo-1592456772180-2129afb02b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="pt-12 flex flex-row justify-center flex-wrap gap-8 ">
      {products.map((product) => {
        const { title, price, image } = product;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
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
export default ProductsGrid;
