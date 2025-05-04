import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/heroImg.jpg";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-3 justify-start items-center min-h-[80vh]">
      <motion.div
        className="mx-3 flex flex-col items-center lg:items-start lg:ml-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="text-4xl font-bold text-center tracking-tight sm:text-5xl lg:text-6xl font-['Montserrat'] lg:text-start"
          variants={item}
        >
          Your Urban Farming Marketplace{" "}
          <motion.span
            className="text-green-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Grow, Sell, Thrive!
          </motion.span>
        </motion.p>

        <motion.p
          className="mt-8 leading-6 font-['Montserrat'] text-sm text-center lg:text-start max-w-lg"
          variants={item}
        >
          Buy fresh farm products, rent urban land, or sell your harvest – all
          in one place. Join as a buyer, landowner, or seller to grow your
          city's green future.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-row gap-4 justify-center lg:self-start"
          variants={item}
        >
          <Link
            to="products"
            className="btn font-['Kanit'] text-gray-200 bg-green-900 border-1 border-green-900 hover:bg-green-800 transition-colors duration-300 transform hover:scale-105"
          >
            Browse Products
          </Link>
          <Link
            to="lands"
            className="btn text-gray-200 font-['Kanit'] bg-green-900 border-1 border-green-900 hover:bg-green-800 transition-colors duration-300 transform hover:scale-105"
          >
            View Land Listings
          </Link>
        </motion.div>
      </motion.div>

      <motion.img
        src={hero}
        alt="hero Image"
        className="w-200 lg:w-140 rounded-lg shadow-2xl"
        variants={imageAnimation}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.02 }}
      />
    </div>
  );
};

export default Hero;
