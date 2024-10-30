import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { services } from "../arrays";
import { useTranslateContext } from "../context/TranslateContext";

const Services = () => {
  const { language } = useTranslateContext();
  const servicesArray = services(language);
  return (
    <section

      className="my-6 py-10 bg-gray-50 relative overflow-hidden px-6 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-1/3 h-auto opacity-5"
        >
          <path
            fill="#FF6B6B"
            d="M39.9,-65.7C52.8,-59.5,65,-50.1,73.3,-37.9C81.7,-25.6,86.2,-10.5,85.6,4.3C85,19.1,79.3,33.6,70.8,46.2C62.3,58.8,51,69.5,37.7,75.7C24.4,81.9,9.1,83.5,-5.4,81.1C-19.9,78.7,-33.6,72.3,-45.5,63.7C-57.4,55.1,-67.5,44.3,-74.2,31.3C-80.9,18.3,-84.2,3.2,-82.4,-11.2C-80.5,-25.6,-73.5,-39.3,-63.3,-49.7C-53.1,-60.1,-39.7,-67.3,-26.5,-71.9C-13.3,-76.6,-0.3,-78.7,11.7,-77C23.8,-75.3,47,-71.9,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {language === "ar" ? "خدماتنا" : "Our Services"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesArray.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col "
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-auto">
                  <div className={`text-2xl ${service.color}`}>
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <p className="text-gray-600 h-10">{service.description}</p>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex justify-between items-center ">
                  <span className="text-lg font-bold text-green-500">
                    {service.price}
                  </span>
                  <Button>
                    {language === "ar" ? "ابدأ الآن" : "Get Started"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
