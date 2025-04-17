import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
];

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => {
    setCurrent((current - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % total);
  };

  return (
    <div className="w-full flex justify-center items-center py-10 bg-gray-100">
      <div className="relative w-[600px] h-[400px] overflow-hidden rounded-xl shadow-xl">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black px-3 py-2 rounded-full hover:bg-white"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black px-3 py-2 rounded-full hover:bg-white"
        >
          ▶
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
