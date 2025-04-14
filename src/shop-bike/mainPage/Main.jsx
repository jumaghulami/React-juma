import React from "react";

function Main() {
  const data = [
    {
      id: 1,
      image: "/images/batoor.png",
      title: "Honda",
      bio: "Sport Morocycle",
    },
    {
      id: 2,
      image: "/images/bike.jpg",
      title: "Kavasaki",
      bio: "Sport Morocycle",
    },
    {
      id: 3,
      image: "/images/bool.jpg",
      title: "Bajaj",
      bio: "Sport Morocycle",
    },
    {
      id: 4,
      image: "/images/by.jpg",
      title: "Bajaj",
      bio: "Sport Morocycle",
    },
    {
      id: 5,
      image: "/images/old car.jpg",
      title: "Bajaj",
      bio: "Sport Morocycle",
    },
    {
      id: 6,
      image: "/images/jeep.jpg",
      title: "Bajaj",
      bio: "Sport Morocycle",
    },
  ];

  return (
    <div className="bg-sky-50 min-h-screen   ">
      <h1>Welcomr to main page</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 p-5 justify-center items-center ">
        {data.map((item) => (
          <div
            key={item.id}
            className=" bg-gradient-to-r from-purple-500 to-blue-500 flex p-5 justify-center items-center flex-col  rounded-lg shadow-2xl"
          >
            <img
              src={item.image}
              alt="ProfileShop"
              className=" object-cover w-80 h-80"
            />
            <h1 className=" text-2xl font-bold text-gray-600">{`${item.title}`}</h1>
            <p className="text-gray-800 font-thin ">{item.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
