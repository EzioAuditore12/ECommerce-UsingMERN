import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  const slides = [
    { 
      id: 1, 
      content: "ELEVATE your everyday", 
      image: "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1708057309675/4be91554efa73c48980359bd8c5ee754.png.webp", 
      deal: "From ₹31,999*",
      subtitle: "Android Advantage",
      bgColor: "bg-green-50"
    },
    { 
      id: 2, 
      content: "NEW ARRIVALS", 
      image: "https://cottonworld.net/cdn/shop/files/L-TSHIRT-17272-21016-ROYAL_4.jpg?v=1734613465&width=960",
      deal: "Starting at ₹2,099*",
      subtitle: "Reebok Collection",
      bgColor: "bg-blue-50"
    },
    { 
      id: 3, 
      content: "MacBook Air M2", 
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303665",
      deal: "From ₹114,900*",
      subtitle: "Supercharged by M2",
      bgColor: "bg-gray-50"
    },
  ];

  return (
    <div className="w-full md:w-[70%] lg:w-[60%] mt-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="overflow-hidden shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`h-[300px] ${slide.bgColor} bg-opacity-70`}>
              <div className="flex h-full items-center justify-center ">
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-medium mb-2">{slide.subtitle}</span>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{slide.content}</h2>
                  <p className="text-xl font-bold text-gray-800 mb-4">{slide.deal}</p>
                  <button className="mt-2 px-6 py-2 bg-black text-white rounded-full w-fit hover:bg-gray-800 transition-colors">
                    Buy Now →
                  </button>
                </div>
                {/* Right Image */}
                <div className="flex-1 flex justify-center items-center mr-1">
                  <img 
                    src={slide.image} 
                    alt={slide.content} 
                    className="h-[250px] w-[250px] object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
