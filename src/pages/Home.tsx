import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import OurFeatures from "../components/OurFeatures";
import { FaHome, FaTools, FaComments, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslateContext } from "../context/TranslateContext";

const Home: React.FC = () => {
  const { language } = useTranslateContext();
  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-grow  ">
        <Hero />
        <OurFeatures />
        <Testimonials />
        <Contact />
      </main>
      <div
        className={`fixed top-3/4 transform -translate-y-1/2 z-50 ${
          language === "ar" ? "left-4" : "right-4"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            to="#hero"
            className="bg-primary text-white p-2 rounded-full hover:bg-opacity-90 transition duration-300"
            title="Home"
          >
            <FaHome />
          </Link>
          <Link
            to="#services"
            className="bg-primary text-white p-2 rounded-full hover:bg-opacity-90 transition duration-300"
            title="Services"
          >
            <FaTools />
          </Link>
          <Link
            to="#testimonials"
            className="bg-primary text-white p-2 rounded-full hover:bg-opacity-90 transition duration-300"
            title="Testimonials"
          >
            <FaComments />
          </Link>
          <Link
            to="#contact"
            className="bg-primary text-white p-2 rounded-full hover:bg-opacity-90 transition duration-300"
            title="Contact"
          >
            <FaEnvelope />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
