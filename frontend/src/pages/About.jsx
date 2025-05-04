import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.png";
import heroImg1 from "../assets/heroImg1.jpg";
import { FaSeedling } from "react-icons/fa";
import { TbDatabaseEdit } from "react-icons/tb";
import { MdRebaseEdit } from "react-icons/md";
import { GiAppleSeeds } from "react-icons/gi";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.03 },
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={slideInFromRight}
          >
            <motion.img
              src={aboutImg}
              alt="farmer's Image"
              className="w-full max-w-md mx-auto rounded-lg"
              whileHover={{ scale: 1.01 }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            variants={slideInFromLeft}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 font-['Rubik'] mb-6 text-center md:text-left"
              variants={item}
            >
              Ketema<span className="text-green-700">Farm</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 font-['Montserrat'] leading-relaxed text-center md:text-left"
              variants={item}
            >
              At KetemaFarm, we believe cities can be greener, healthier, and
              more self-sufficient. Our platform connects buyers, landowners,
              product sellers, and tool suppliers in a thriving urban farming
              ecosystem.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section className="py-16 bg-green-50" variants={fadeIn}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-green-900 font-['Rubik'] mb-8"
            variants={item}
          >
            Our <span className="text-green-700">Mission</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 font-['Montserrat'] max-w-3xl mx-auto"
            variants={item}
          >
            Empowering local agriculture by connecting farmers, landowners, and
            consumers through an integrated marketplace and land rental system.
          </motion.p>

          <motion.div className="mt-12" variants={item}>
            <img
              src={heroImg1}
              alt="Community farming"
              className="rounded-lg w-full max-w-4xl mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-green-900 font-['Rubik'] text-center mb-12"
            variants={item}
          >
            What We <span className="text-green-700">Stand For</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
          >
            {[
              {
                icon: <TbDatabaseEdit className="text-green-700 text-2xl" />,
                title: "Sustainability",
                desc: "Optimizing urban spaces and promoting eco-friendly practices.",
              },
              {
                icon: <MdRebaseEdit className="text-green-700 text-2xl" />,
                title: "Education",
                desc: "Free tutorials and skill-building resources for all users.",
              },
              {
                icon: <FaSeedling className="text-green-700 text-2xl" />,
                title: "Community",
                desc: "Bridging farmers and landowners to grow together.",
              },
              {
                icon: <GiAppleSeeds className="text-green-700 text-2xl" />,
                title: "Innovation",
                desc: "Mobile-first access, crop health tools, and modern farming solutions.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-green-100 hover:bg-green-50 transition-all cursor-pointer"
                variants={scaleUp}
                whileHover="hover"
              >
                <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-center font-['Montserrat'] mb-3 text-green-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center font-['Montserrat']">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-green-900 font-['Rubik'] text-center mb-12"
            variants={item}
          >
            Our <span className="text-green-700">Services</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
          >
            {[
              {
                title: "Community Farmers",
                desc: "Empowering local farmers through tools, training and trusted connections.",
              },
              {
                title: "Marketplace",
                desc: "A platform to buy and sell fresh produce, tools, and farming essentials.",
              },
              {
                title: "Land Rentals",
                desc: "Connecting landowners with farmers to maximize land use efficiently.",
              },
              {
                title: "Education & Tutorials",
                desc: "Free guides and skill-development content to support aspiring farmers.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg border border-green-100 hover:bg-green-50 cursor-pointer transition-all"
                variants={item}
                whileHover={{ y: -3 }}
              >
                <h3 className="text-2xl font-semibold font-['Rubik'] text-green-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-['Montserrat']">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <motion.section className="py-16 px-4 sm:px-6 bg-white" variants={fadeIn}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold font-['Rubik'] text-center mb-16 text-green-900"
            variants={item}
          >
            Our <span className="text-green-700">Impact</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
            variants={container}
          >
            {[
              { value: "250+", label: "Community Farmers" },
              { value: "120+", label: "Lands Listed" },
              { value: "1000+", label: "Products Sold" },
              { value: "500+", label: "Tutorials Accessed" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-green-50 p-6 rounded-lg cursor-pointer"
              >
                <p className="text-4xl md:text-5xl font-bold text-green-700 font-['Montserrat'] mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-['Montserrat'] text-gray-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
