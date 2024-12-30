import React, { useState, useEffect } from "react";

function Carousel() {
  const slides = [
    {
      id: 1,
      content: "ELEVATE your everyday",
      image:
        "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1708057309675/4be91554efa73c48980359bd8c5ee754.png.webp",
      deal: "From ₹31,999*",
      subtitle: "Android Advantage",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      content: "NEW ARRIVALS",
      image:
        "https://cottonworld.net/cdn/shop/files/L-TSHIRT-17272-21016-ROYAL_4.jpg?v=1734613465&width=960",
      deal: "Starting at ₹2,099*",
      subtitle: "Reebok Collection",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      content: "MacBook Air M2",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303665",
      deal: "From ₹114,900*",
      subtitle: "Supercharged by M2",
      bgColor: "bg-gray-50",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Automatically advance every 5 seconds
      return () => clearInterval(interval);
    }
  }, [autoSlide, slides.length]);

  const handleDotClick = (index) => {
    setAutoSlide(false); // Stop auto-sliding on user interaction
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setAutoSlide(false);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setAutoSlide(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full h-[600px] md:h-[500px] md:w-[85%] lg:w-[55%] relative overflow-hidden rounded-2xl group">
      {/* Arrow Buttons */}
      <button 
        onClick={handlePrevSlide}
        className="hidden md:flex opacity-0 group-hover:opacity-100 absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/60 rounded-full items-center justify-center hover:bg-white/90 transition-all duration-300"
      >
        <span className="text-2xl">←</span>
      </button>
      <button 
        onClick={handleNextSlide}
        className="hidden md:flex opacity-0 group-hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/60 rounded-full items-center justify-center hover:bg-white/90 transition-all duration-300"
      >
        <span className="text-2xl">→</span>
      </button>

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex-shrink-0 w-full h-[500px] ${slide.bgColor} bg-opacity-70 flex flex-col md:flex-row items-center rounded-2xl`}
          >
            <div className="w-full md:w-3/5 text-center md:text-left px-6 py-4">
              <span className="text-sm font-medium mb-2 block">
                {slide.subtitle}
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {slide.content}
              </h2>
              <p className="text-2xl font-bold text-gray-800 mb-6">
                {slide.deal}
              </p>
              <button className="mt-2 px-6 py-3 bg-black text-white rounded-full w-fit hover:bg-gray-800 transition-colors">
                Buy Now →
              </button>
            </div>
            <div className="w-full md:w-2/5 flex justify-center">
              <img
                src={slide.image}
                alt={slide.content}
                className="h-[300px] w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
