import React from "react";

import { RiHome2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex items-center w-full p=20">
      <div className="w-1/5 text-center">
        <span className="text-4xl font-bold text-primary relative">
          AirHouse
          <RiHome2Line className="absolute -left-10 bottom-1" />
        </span>
      </div>
        <nav className="w-4/5 flex justify-around">
        <a href="#home" className="">
          Home
        </a>
        <a href="#aboutUs" className="">
          About Us
        </a>
        <a href="#services" className="">
          Services
        </a>
        <a href="#aboutUs" className="">
          Products
        </a>
      </nav>
      <button className="bg-primary text-white px-4 py-2 rounded-md"></button>
    </header>
  );
};

export default Header;
