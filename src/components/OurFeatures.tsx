import { useTranslateContext } from "../context/TranslateContext";

export default function OurFeatures() {
  const { language } = useTranslateContext();

  return (
    <section
      className="relative py-12 px-6 sm:px-6 lg:px-12 xl:px-16"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0  opacity-50 rounded-full blur-3xl -z-10"></div>
      <h2 className="text-4xl font-bold text-center mb-6">
        {language === "ar"
          ? "ما الذي يجعل متجرنا "
          : "What Makes The SMM Store "}
        <span className="text-teal-600 border-b-2 border-teal-600">
          {language === "ar" ? "مختلفاً؟" : "Different?"}
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-16">
        {language === "ar"
          ? "للبداية، نساعدك على توفير المال لأننا بأسعار معقولة للغاية. نحن أيضاً نعطيك ما تدفع مقابله، وهو "
          : "For starters, we help you save money since we are incredibly affordable. We also give you what you pay for, which is quality "}
        <span className="text-teal-600 border-b-2 border-teal-600">
          {language === "ar"
            ? "خدمات تسويق عبر وسائل التواصل الاجتماعي"
            : "social media marketing services"}
        </span>
        {language === "ar"
          ? " عالية الجودة. ولن تقلق أبداً بشأن انتظار الدعم مرة أخرى حيث فريقنا متاح دائماً لتقديم دعم حقيقي في الوقت الفعلي. تبحث عن المزيد من الأسباب لاختيارنا؟ إليك أربعة أسباب أخرى."
          : ". And you'll never have to worry about waiting for support again as our team is always available to give you real support in real time. Looking for more reasons why you should choose us? Here are four more."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">
            {language === "ar" ? "جودة خدمة رائعة" : "Great Service Quality"}
          </h3>
          <p className="text-gray-600 text-sm">
            {language === "ar"
              ? "ما يميزنا عن منافسينا هو الخدمات عالية الجودة التي نقدمها لعملائنا."
              : "What sets us apart from our competitors is the high-quality services we offer our customers."}
          </p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-teal-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">
            {language === "ar" ? "طرق متعددة" : "Multiple Methods"}
          </h3>
          <p className="text-gray-600 text-sm">
            {language === "ar"
              ? "نوفر لك طرق دفع متنوعة حتى تتمتع بتجربة رائعة أثناء التسوق معنا."
              : "We provide you with various payment methods so you can have a great experience while shopping with us."}
          </p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-pink-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">
            {language === "ar" ? "أسعار رخيصة" : "Really Cheap Prices"}
          </h3>
          <p className="text-gray-600 text-sm">
            {language === "ar"
              ? "بالإضافة إلى تقديم أفضل جودة، مجموعة خدماتنا بأسعار معقولة للغاية."
              : "In addition to giving you the best quality, our range of services are also super affordable."}
          </p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-sky-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">
            {language === "ar" ? "توصيل سريع جداً" : "Extra Quick Delivery"}
          </h3>
          <p className="text-gray-600 text-sm">
            {language === "ar"
              ? "نحن نعلم أن في مجال الأعمال، الوقت هو المال. لذلك، نحن سريعون في طلبك وسريعون عندما يتعلق الأمر بتقديم الخدمة."
              : "We know that in business, time is money. So, we are prompt on your order and fast when it comes to service delivery."}
          </p>
        </div>
      </div>
    </section>
  );
}
