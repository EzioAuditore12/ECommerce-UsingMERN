import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  const slides = [
    { id: 1, content: "Welcome to ByteBoulevard!" },
    { id: 2, content: "Browse our latest PC Hardware!" },
    { id: 3, content: "Check out the best deals!" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-4">
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
            <div className="relative h-[300px] flex justify-center items-center bg-transparent">
              <div className="text-center p-4">
                <h2 className="text-xl font-bold text-gray-800">{slide.content}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
