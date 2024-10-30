import GeneralInformations from "../components/apiComps/GeneralInformations";
import ServicesList from "../components/apiComps/ServicesList";
import AddOrder from "../components/apiComps/AddOrder";
import OrderStatus from "../components/apiComps/OrderStatus";
import MutipleOrdersStatus from "../components/apiComps/MutipleOrdersStatus";
import CreateRefill from "../components/apiComps/CreateRefill";
import UserBalance from "../components/apiComps/UserBalance";
import { useTranslateContext } from "../context/TranslateContext";

const Api = () => {
  const { language } = useTranslateContext();

  return (
    <div className="container mx-auto px-6 py-12 sm:px-6 lg:px-14 xl:px-20">
      <h1 className="text-4xl font-bold mb-6 text-center mt-4">
        {language === "ar" ? "API ربط" : "API Documentation"}
      </h1>
      <p
        className="mb-8 text-lg text-center"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {language === "ar"
          ? "يمكنك استخدام API الخاص بنا للاتصال بالبرنامج النصي الخاص بك. لقد قمنا بتوفير نقاط نهاية API وطرق التالية."
          : "You can use our API to connect with your script. We have provided the following API endpoints and methods."}
      </p>

      <GeneralInformations />

      <ServicesList />
      <AddOrder />

      <OrderStatus />

      <MutipleOrdersStatus />

      <CreateRefill />

      <UserBalance />
    </div>
  );
};

export default Api;
