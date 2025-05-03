import { Link } from "react-router-dom";
import notFound from "../assets/notFound.png";

const Error = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <img src={notFound} alt="page not found" />
        <h1 className="text-5xl text-center font-bold">Oops! page not found</h1>
        <p className="text-2xl text-center max-w-2xl opacity-50">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </p>
        <Link className="bg-green-600 rounded-full py-2 px-4 text-white font-semibold hover:bg-green-500 hover:cursor-pointer">
          Back to Home
        </Link>
      </div>
    </section>
  );
};
export default Error;