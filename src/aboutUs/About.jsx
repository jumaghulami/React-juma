// import React, { useState } from "react";

// function About() {
//   const [current, setCurrent] = useState(0);
//   const total = slides.length;

//   const prevSlide = () => {
//     setCurrent((current - 1 + total) % total);
//   };

//   const nextSlide = () => {
//     setCurrent((current + 1) % total);
//   };

//   return (
//     <div className=" flex justify-center items-center py-20">
//       <div className=" relative w-[500px] h-[400px] bg-black opacity-80 transform -translate-x-20 duration-500">
//         <img
//           className="  w-full h-full object-cover"
//           src={slides[current].image}
//         />
//         <button
//           onClick={prevSlide}
//           className=" absolute top-1/2 left-4 bg-gray-300 hover:bg-gray-200 duration-200 rounded-full px-1 py-1 "
//         >
//           ◀
//         </button>
//         <button
//           onClick={nextSlide}
//           className=" absolute top-1/2 right-4 bg-gray-300 hover:bg-gray-200 duration-200 rounded-full px-1 py-1 "
//         >
//           ▶
//         </button>

//         <div className=" absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
//           {slides.map((_, index) => (
//             <span
//               onClick={() => setCurrent(index)}
//               className={` w-4 h-4 rounded-full cursor-pointer ${
//                 index === current ? "bg-gray-100 " : "bg-blue-400"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // زیر 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // زیر 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 m-auto ">
      <div className="mt-24 m-10">
        <Slider {...settings}>
          {slides.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-yellow-100 h-[300px] rounded-xl p-4">
                <div className="flex justify-center items-center">
                  <img
                    className="w-32 h-32 rounded-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col justify-center items-center mt-4">
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <p className="text-gray-700 text-center">{item.bio}</p>
                  <button className="mt-3 bg-yellow-600 px-6 py-2 rounded-md text-white">
                    Taste
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default About;
