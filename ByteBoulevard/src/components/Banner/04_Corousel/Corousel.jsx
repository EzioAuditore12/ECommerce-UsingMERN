import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  const slides = [
    { id: 1, image: "/images/slide1.jpg", title: "Slide 1" },
    { id: 2, image: "/images/slide2.jpg", title: "Slide 2" },
    { id: 3, image: "/images/slide3.jpg", title: "Slide 3" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[300px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
