import { FaRocket } from "react-icons/fa";
import { useTranslateContext } from "../context/TranslateContext";

const Hero: React.FC = () => {
  const { language } = useTranslateContext();

  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 relative overflow-hidden px-6 sm:px-6 lg:px-12 xl:px-20"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Single blob in the background */}
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-1/2 h-auto opacity-10"
        >
          <path
            fill="#4ECDC4"
            d="M42.7,-62.9C56.8,-54.1,70.8,-43.5,77.9,-29.2C85,-14.9,85.1,3.1,80.2,19.2C75.3,35.3,65.3,49.5,52.1,60.1C38.9,70.7,22.4,77.7,5.2,77.9C-12,78.1,-24,71.5,-35.8,63.5C-47.6,55.5,-59.2,46.1,-67.3,33.6C-75.4,21.1,-80,5.4,-78.1,-9.1C-76.2,-23.6,-67.8,-36.9,-56.6,-46.6C-45.4,-56.3,-31.4,-62.3,-17.1,-67.5C-2.8,-72.7,11.8,-77,25.5,-74.5C39.2,-72,53,-71.7,42.7,-62.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {language === "ar"
              ? "ارتقِ بحضورك على وسائل التواصل الاجتماعي"
              : "Elevate Your Social Media Presence"}
          </h1>
          <p className="text-xl mb-8">
            {language === "ar"
              ? "اكتشف قوة التسويق عبر وسائل التواصل الاجتماعي من خلال استراتيجياتنا وأدواتنا المتخصصة. عزز التفاعل، وزد من المتابعين، وحسن عائد استثمارك."
              : "Unlock the power of social media marketing with our expert strategies and tools. Drive engagement, increase followers, and boost your ROI."}
          </p>
          <a
            href="#contact"
            className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 inline-flex items-center"
          >
            <FaRocket className="mx-2 h-5 w-5" />
            {language === "ar" ? "ابدأ الآن" : "Get Started"}
          </a>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/3d-hero.png"
            draggable="false"
            alt={
              language === "ar"
                ? "رسم توضيحي ثلاثي الأبعاد للتسويق عبر وسائل التواصل الاجتماعي"
                : "3D Social Media Marketing Illustration"
            }
            className="w-4/5 h-auto mx-auto rounded-lg relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
