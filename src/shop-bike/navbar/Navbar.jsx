import React from "react";
import { href, Link } from "react-router-dom";

function Navbar() {
  const nav = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Home",
      href: "/about",
    },
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Home",
      href: "/",
    },
  ];

  return (
    <div>
      <div className=" bg-slate-200 shadow-lg flex justify-between py-10 px-20 items-center">
        <h1 className=" font-bold text-2xl">Bike Store</h1>
        <ul className="flex space-x-5 ">
          {nav.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
