import { Link } from "react-router-dom";

const LinkButton = ({ path, text }) => {
  return (
    <Link
      to={path}
      className="text-green-900  border-1 border-green-900 hover:bg-green-900 hover:text-green-50 w-20 md:w-18 lg:w-24 lg:text-xs  h-8 flex justify-center items-center font-['Rubik'] text-[10px] md:text-[10px] sm:text-xs sm:w-30  rounded-sm"
    >
      {text}
    </Link>
  );
};
export default LinkButton;
