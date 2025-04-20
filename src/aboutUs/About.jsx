import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function About() {
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
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" px-10">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className=" px-2 ">
            <div className="bg-green-200  border rounded-lg">
              <div className="bg-blue-500 flex justify-center rounded-t-lg p-2">
                <img
                  className="w-40 h-40 rounded-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center flex-col">
                <p className="text-2xl font-bold">{item.title}</p>
                <p>{item.bio}</p>
                <button className="bg-purple-500 px-10 py-1 rounded-lg mb-5">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default About;
