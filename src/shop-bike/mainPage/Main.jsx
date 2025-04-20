import React, { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/batoor.png",
    title: "Honda",
    bio: "Sport Motorcycle",
  },
  {
    id: 2,
    image: "/images/bike.jpg",
    title: "Kavasaki",
    bio: "Sport Motorcycle",
  },
  {
    id: 3,
    image: "/images/bool.jpg",
    title: "Bajaj",
    bio: "Sport Motorcycle",
  },
  {
    id: 4,
    image: "/images/by.jpg",
    title: "Bajaj",
    bio: "Sport Motorcycle",
  },
  {
    id: 5,
    image: "/images/old car.jpg",
    title: "Bajaj",
    bio: "Sport Motorcycle",
  },
  {
    id: 6,
    image: "/images/jeep.jpg",
    title: "Bajaj",
    bio: "Sport Motorcycle",
  },
];

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prevSlide = () => {
    setCurrent((current - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % total);
  };

  return (
    <div className="w-full flex justify-center items-center py-10 bg-gray-100">
      <div className="relative w-[600px] h-[400px] overflow-hidden rounded-xl shadow-lg bg-black">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover opacity-80 transition-all duration-500"
        />
        <div className="absolute bottom-0 w-full bg-black/60 text-white px-4 py-2">
          <h2 className="text-xl font-bold">{slides[current].title}</h2>
          <p className="text-sm">{slides[current].bio}</p>
        </div>
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 ">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "white" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
