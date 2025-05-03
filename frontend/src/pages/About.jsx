import backgroundImage from "../assets/bgImage.jpg";
import image1 from "../assets/Image.jpg";
const About = () => {
  return (
    <div className="md:h-650">
      <section
        className="h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About KetemaFarm
          </h1>
          <p className="mt-3 text-base sm:text-lg max-w-md">
            Greening our cities. Empowering local farmers.
          </p>Our Services
          <button className="mt-15 bg-green-600 hover:bg-green-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full transition cursor-pointer">
            Learn More
          </button>
        </div>
      </section>

      <section className="py-16 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-5 text-lg">
            Empowering local agriculture by connecting farmers, landowners, and
            consumers through an integrated marketplace and land rental system.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={image1}
            alt=""
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p>Optimizing urban spaces and promoting eco-friendly practices.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>
              Mobile-first access, crop health tools, and modern farming
              solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p>Bridging farmers and landowners to grow together.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Free tutorials and skill-building resources for all users.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Community Farmers</h3>
            <p className="mt-4 text-lg">
              Empowering local farmers through tools, training and trusted
              connections.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Marketplace</h3>
            <p className="mt-4 text-lg">
              A platform to buy and sell fresh produce, tools, and farming
              essentials.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Land Rentals</h3>
            <p className="mt-4 text-lg">
              Connecting landowners with farmers to maximize land use
              efficiently.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Education & Tutorials</h3>
            <p className="mt-4 text-lg">
              Free guides and skill-development content to support aspiring
              farmers and landowners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center">Our Impact</h2>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 text-center">
          <div>
            <p className="text-4xl font-bold text-green-600">250+</p>
            <p className="mt-2 text-lg">Community Farmers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">120+</p>
            <p className="mt-2 text-lg">Lands Listed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">1000+</p>
            <p className="mt-2 text-lg">Products Sold</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">500+</p>
            <p className="mt-2 text-lg">Tutorials Accessed</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-green-600 text-white text-center mt-15 rounded-lg">
        <h2 className="text-3xl font-bold">
          Join the Urban Farming Revolution
        </h2>
        <p className="mt-4 text-lg">
          Start now - whether you're farming, listing land or looking for fresh
          local products, <strong>KetemaFarm</strong> connects you,
        </p>
        <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white">
          Get Started
        </button>
      </section>
    </div>
  );
};
export default About;
