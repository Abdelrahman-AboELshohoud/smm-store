import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { useTranslateContext } from "../context/TranslateContext";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { language } = useTranslateContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 relative overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-12"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 w-1/3 h-auto opacity-5"
        >
          <path
            fill="#4ECDC4"
            d="M42.7,-62.9C56.8,-54.1,70.8,-43.5,77.9,-29.2C85,-14.9,85.1,3.1,80.2,19.2C75.3,35.3,65.3,49.5,52.1,60.1C38.9,70.7,22.4,77.7,5.2,77.9C-12,78.1,-24,71.5,-35.8,63.5C-47.6,55.5,-59.2,46.1,-67.3,33.6C-75.4,21.1,-80,5.4,-78.1,-9.1C-76.2,-23.6,-67.8,-36.9,-56.6,-46.6C-45.4,-56.3,-31.4,-62.3,-17.1,-67.5C-2.8,-72.7,11.8,-77,25.5,-74.5C39.2,-72,53,-71.7,42.7,-62.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {language === "ar" ? "اتصل بنا" : "Contact Us"}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-3/5">
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  {language === "ar" ? "الاسم" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  {language === "ar" ? "البريد الإلكتروني" : "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  {language === "ar" ? "الرسالة" : "Message"}
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 flex items-center justify-center w-full"
              >
                <FaPaperPlane
                  className={`${language === "ar" ? "ml-2" : "mr-2"} h-5 w-5`}
                />
                {language === "ar" ? "إرسال الرسالة" : "Send Message"}
              </button>
            </form>
            <div className="mt-6 text-center text-gray-600">
              <p>
                {language === "ar"
                  ? "إذا كان لديك أي أسئلة أو تحتاج إلى مساعدة، فلا تتردد في الاتصال بنا."
                  : "If you have any questions or need assistance, please don't hesitate to contact us."}
              </p>
            </div>
          </div>
          <img
            src="/3d-form.webp"
            draggable="false"
            alt={language === "ar" ? "نموذج ثلاثي الأبعاد" : "3d hero"}
            className="md:w-2/5 w-4/5 m-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
