import React from "react";

function Footer() {
  return (
    <div className="bg-slate-800 p-20">
      <div className=" flex justify-around items-center">
        <div className="">
          <h1 className="text-white font-bold text-2xl mb-4">Logo</h1>
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            maiores.
          </p>
        </div>
        <div>
          <h1 className="text-gray-200 font-bold mb-4 mt-4">Our barnds</h1>
          <ul className=" flex space-x-5 text-lg text-gray-400 flex-col">
            <li>prodeucts</li>
            <li>barnds</li>
            <li>skills</li>
          </ul>
        </div>
        <div>
          <h1 className="text-gray-200 font-bold mb-4 ">contactUS</h1>
          <ul className=" flex space-x-5 text-lg text-gray-400">
            <li className=" hover:bg-purple-500 ">Home</li>
            <li className=" hover:bg-purple-500 ">Home</li>
            <li className=" hover:bg-purple-500 ">Home</li>
            <li className=" hover:bg-purple-500 ">Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
