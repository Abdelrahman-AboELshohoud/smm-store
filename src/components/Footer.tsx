import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslateContext } from "../context/TranslateContext";

const Footer: React.FC = () => {
  const { language } = useTranslateContext();

  return (
    <footer
      className="bg-dark text-white py-12 relative overflow-hidden sm:px-6 lg:px-8 xl:px-12"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-1/3 h-auto opacity-5"
        >
          <path
            fill="#FFD93D"
            d="M39.9,-65.7C52.8,-59.5,65,-50.1,73.3,-37.9C81.7,-25.6,86.2,-10.5,85.6,4.3C85,19.1,79.3,33.6,70.8,46.2C62.3,58.8,51,69.5,37.7,75.7C24.4,81.9,9.1,83.5,-5.4,81.1C-19.9,78.7,-33.6,72.3,-45.5,63.7C-57.4,55.1,-67.5,44.3,-74.2,31.3C-80.9,18.3,-84.2,3.2,-82.4,-11.2C-80.5,-25.6,-73.5,-39.3,-63.3,-49.7C-53.1,-60.1,-39.7,-67.3,-26.5,-71.9C-13.3,-76.6,-0.3,-78.7,11.7,-77C23.8,-75.3,47,-71.9,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === "ar" ? "معلومات عنا" : "About Us"}
            </h3>
            <p className="text-sm">
              {language === "ar"
                ? "متجر SMM هو حلك الشامل لجميع احتياجات التسويق عبر وسائل التواصل الاجتماعي. نساعد الشركات على تنمية تواجدها عبر الإنترنت والتواصل مع جمهورها بشكل فعال."
                : "SMM Store is your one-stop solution for all your social media marketing needs. We help businesses grow their online presence and engage with their audience effectively."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent">
                  {language === "ar" ? "الرئيسية" : "Home"}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent">
                  {language === "ar" ? "الخدمات" : "Services"}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent">
                  {language === "ar" ? "التوصيات" : "Testimonials"}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  {language === "ar" ? "اتصل بنا" : "Contact"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === "ar" ? "تواصل معنا" : "Connect With Us"}
            </h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-accent">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {language === "ar"
              ? "متجر SMM. جميع الحقوق محفوظة."
              : "SMM Store. All rights reserved."}
          </p>
          <div className="mt-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white mx-2">
              {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white mx-2">
              {language === "ar" ? "شروط الخدمة" : "Terms of Service"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
