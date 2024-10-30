import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovations Inc.",
    text: "SMM Store's strategies helped us increase our social media engagement by 200%, leading to a significant boost in our online presence and customer acquisition.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Mike Smith",
    company: "Fashion Forward",
    text: "Our Instagram followers grew exponentially thanks to SMM Store. Their tailored approach and expert insights have been invaluable to our brand's growth.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-100 relative overflow-hidden px-6 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="absolute top-0 right-0 w-full h-full">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-1/3 h-auto opacity-5"
        >
          <path
            fill="#FFD93D"
            d="M44.1,-76.5C58.4,-69.5,72,-59.2,79.7,-45.6C87.4,-32,89.2,-16,88.9,-0.2C88.6,15.7,86.2,31.4,78.9,44.3C71.6,57.2,59.4,67.3,45.6,74.9C31.8,82.5,15.9,87.6,0.6,86.6C-14.7,85.6,-29.4,78.5,-42.6,70C-55.8,61.5,-67.5,51.6,-76.3,39C-85.1,26.4,-91,13.2,-91.2,-0.1C-91.4,-13.4,-85.8,-26.8,-77.8,-38.5C-69.8,-50.2,-59.3,-60.2,-46.6,-68C-33.9,-75.8,-17,-81.4,-0.2,-81.1C16.6,-80.8,33.2,-74.5,44.1,-76.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-start"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <FaQuoteLeft className="text-2xl text-primary mb-4" />
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-primary">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
