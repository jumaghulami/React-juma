import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TiMessages } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
function About() {
  const slides = [
    {
      id: 1,
      image: "/images/batoor.png",
      title: "Honda",
      bio: "Sport Motorcycle",
      new: "News & Article",
      paragraph: "About how can improve our frontEnd Skills...",
      comment: 10,
      images: "images/bike.jpg",
      name: "ALi Juma",
      date: "20/4/2025",
    },
    {
      id: 2,
      image: "/images/bike.jpg",
      title: "Kavasaki",
      bio: "Sport Motorcycle",
      new: "News & Article",
      paragraph: "About how can improve our frontEnd Skills...",
      comment: 10,
      images: "images/bike.jpg",
      name: "ALi Juma",
      date: "20/4/2025",
    },
    {
      id: 3,
      image: "/images/bool.jpg",
      title: "Bajaj",
      bio: "Sport Motorcycle",
      new: "News & Article",
      paragraph: "About how can improve our frontEnd Skills...",
      comment: 10,
      images: "images/bike.jpg",
      name: "ALi Juma",
      date: "20/4/2025",
    },
    {
      id: 4,
      image: "/images/by.jpg",
      title: "Bajaj",
      bio: "Sport Motorcycle",
      new: "News & Article",
      paragraph: "About how can improve our frontEnd Skills...",
      comment: 10,
      images: "images/bike.jpg",
      name: "ALi Juma",
      date: "20/4/2025",
    },
    {
      id: 5,
      image: "/images/old car.jpg",
      title: "Bajaj",
      bio: "Sport Motorcycle",
      new: "News & Article",
      paragraph: "About how can improve our frontEnd Skills...",
      comment: 10,
      images: "images/bike.jpg",
      name: "ALi Juma",
      date: "20/4/2025",
    },
    {
      id: 6,
      image: "/images/jeep.jpg",
      title: "Bajaj",
      bio: "Sport Motorcycle",
      new: "News & Article",
      paragraph: "About how can improve our frontEnd Skills...",
      comment: 10,
      images: "images/bike.jpg",
      name: "ALi Juma",
      date: "20/4/2025",
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
            <div className="bg-green-  border rounded-lg">
              {/* navbar inofo */}
              <div className=" px-2 mb-2">
                <span className=" flex justify-between">
                  <p className=" font-semibold">{item.new}</p>
                  <p className=" flex items-center gap-1 text-gray-400">
                    <TiMessages />
                    {item.date}
                  </p>
                </span>
                <p className=" font-semibold mb-2">{item.paragraph}</p>
              </div>
              <div className=" flex justify-center rounded-t-lg ">
                <img
                  className=" h-50 w-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              {/* footer slide image */}
              <div className=" flex  justify-between items-center px-2">
                <span className=" flex items-center gap-2">
                  <div className="py-1 object-cover">
                    <img
                      src={item.images}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </div>
                  <span>
                    <p className=" font-thin text-sm flex items-center gap-1">
                      <IoIosContact /> {item.name}
                    </p>
                    <p className=" font-thin text-sm">{item.date}</p>
                  </span>
                </span>
                <button className="group px-3 py-1 flex items-center gap-1  hover:text-blue-600">
                  <span className=" group-hover:border-b duration-200">
                    Learn More
                  </span>{" "}
                  <FaLongArrowAltRight className=" group-hover:translate-x-1  duration-300" />
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
