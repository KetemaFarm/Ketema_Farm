// import backgroundImage from "../assets/bgImage.jpg";
import aboutImg from "../assets/aboutImg.png";
import heroImg1 from "../assets/heroImg1.jpg";
import { FaSeedling } from "react-icons/fa";
import { TbDatabaseEdit } from "react-icons/tb";
import { MdRebaseEdit } from "react-icons/md";
import { GiAppleSeeds } from "react-icons/gi";
const About = () => {
  return (
    // <div className="h-screen">About</div>
    <div className="">
      <section className=" ">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between md:justify-center md:gap-20 lg:gap-50 xl:gap-80 items-start  justify-center h-full text-center px-4">
          <div className="mt-10 sm:order-2 sm:w-90">
            <h1 className="text-2xl text-green-900 sm:text-4xl font-bold font-['Rubik']">
              About KetemaFarm
            </h1>
            <p className="mt-3 text-xs text-center font-['Montserrat'] ">
              At KetemaFarm, we believe cities can be greener, healthier, and
              more self-sufficient. Our platform connects buyers, landowners,
              product sellers, and tool suppliers in a thriving urban farming
              ecosystem. Whether you’re growing fresh produce on a balcony,
              renting unused land, or shopping for organic goods, we’re here to
              make sustainable living accessible to everyone.
            </p>
          </div>
          <img src={aboutImg} alt="farmer's Image" className="mt-18 w-60" />
        </div>
      </section>

      <section className="flex flex-col mt-16 items-center justify-center">
        <div className="sm:w-90 mx-4">
          <h2 className="text-2xl text-green-900 sm:text-4xl font-bold font-['Rubik'] text-center">
            Our Mission
          </h2>
          <p className="mt-3 text-xs text-center font-['Montserrat']">
            Empowering local agriculture by connecting farmers, landowners, and
            consumers through an integrated marketplace and land rental system.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={heroImg1} alt="" className="rounded-lg w-full sm:hidden" />
        </div>
      </section>
      <section className="mt-20 bg-white">
        <h2 className="text-2xl text-green-900 sm:text-4xl font-bold font-['Rubik'] text-center">
          What We Stand For
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 ">
          <div className="bg-gray-200 p-2 mx-3 mt-8 rounded-lg shadow flex flex-row  gap-4 w-90 lg:w-110 mb-3">
            <div className="bg-lime-800 rounded-lg w-30  flex flex-row items-center justify-center">
              <div className="bg-white size-8 flex flex-row items-center justify-center rounded-full">
                <TbDatabaseEdit className=" size-4" />
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-2 font-['Montserrat'] font-bold">
                Sustainability
              </h3>
              <p className="font-['Montserrat'] text-xs">
                Optimizing urban spaces and promoting eco-friendly practices.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-2 mx-3 mt-5 rounded-lg shadow flex flex-row gap-4 w-90 lg:w-110 lg:h-20">
            <div className="bg-lime-800 rounded-lg w-24 flex flex-row items-center justify-center">
              <div className="bg-white size-8 flex flex-row items-center justify-center rounded-full">
                <MdRebaseEdit className=" size-4" />
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-2 font-['Montserrat'] font-bold">
                Education
              </h3>
              <p className="font-['Montserrat'] text-xs">
                Free tutorials and skill-building resources for all users.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-2 mx-3 mt-5 rounded-lg shadow flex flex-row  gap-4 w-90 lg:w-110 lg:h-20">
            <div className="bg-lime-800 rounded-lg w-24 flex flex-row items-center justify-center">
              <div className="bg-white size-8 flex flex-row items-center justify-center rounded-full">
                <FaSeedling className=" size-4" />
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-2 font-['Montserrat'] font-bold">
                Community
              </h3>
              <p className="font-['Montserrat'] text-xs">
                Bridging farmers and landowners to grow together.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-2 mx-3 mt-5 rounded-lg shadow flex flex-row gap-4 w-90 lg:w-110 lg:h-20">
            <div className="bg-lime-800 rounded-lg w-32 flex flex-row items-center justify-center">
              <div className="bg-white size-8 flex flex-row items-center justify-center rounded-full">
                <GiAppleSeeds className=" size-4" />
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-2 font-['Montserrat'] font-bold">
                Innovation
              </h3>
              <p className="font-['Montserrat'] text-xs">
                Mobile-first access, crop health tools, and modern farming
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl text-green-900 sm:text-4xl font-bold font-['Rubik'] text-center">
          Our Services
        </h2>
        <div className="mt-8 flex flex-row gap-8 justify-center flex-wrap mx-5">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-70 border-1 border-green-900">
            <h3 className="text-2xl font-semibold font-['Rubik']">
              Community Farmers
            </h3>
            <p className="mt-4 text-sm font-['Montserrat']">
              Empowering local farmers through tools, training and trusted
              connections.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-70 border-1 border-green-900">
            <h3 className="text-2xl font-semibold font-['Rubik']">
              Marketplace
            </h3>
            <p className="mt-4 text-sm font-['Montserrat']">
              A platform to buy and sell fresh produce, tools, and farming
              essentials.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-70 border-1 border-green-900">
            <h3 className="text-2xl font-semibold font-['Rubik']">
              Land Rentals
            </h3>
            <p className="mt-4 text-sm font-['Montserrat']">
              Connecting landowners with farmers to maximize land use
              efficiently.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-70 border-1 border-green-900">
            <h3 className="text-2xl font-semibold font-['Rubik']">
              Education & Tutorials
            </h3>
            <p className="mt-4 text-sm font-['Montserrat']">
              Free guides and skill-development content to support aspiring
              farmers and landowners.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 bg-gray-50 rounded-lg p-12">
        <h2 className="text-2xl text-green-950 sm:text-4xl font-bold font-['Rubik'] text-center">
          Our Impact
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 text-center font-['Rubik']">
          <div>
            <p className="text-4xl font-bold text-lime-800">250+</p>
            <p className="mt-2 text-lg">Community Farmers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-lime-800">120+</p>
            <p className="mt-2 text-lg">Lands Listed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-lime-800">1000+</p>
            <p className="mt-2 text-lg">Products Sold</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-lime-800">500+</p>
            <p className="mt-2 text-lg">Tutorials Accessed</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
