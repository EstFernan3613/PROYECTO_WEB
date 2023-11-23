import React from "react";
// Icons
import {

  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-red-400 p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-footer text-white"
          >
            AirHouse<span className="text-primary text-5xl">.</span>{" "}
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiGithubLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Compañia
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Sobre nosotros
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Reservas
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Inventario
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Eventos
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Terminos y condiciones
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Politica de privacidad
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-primary text-white rounded-xl"
          >
            Ponte en Contacto
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © Air House 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;