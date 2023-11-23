import React from "react";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Body = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Alojamientos{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
              Los mejores
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Gran casa de dos pisos en uno de los mejores sectores de Mesa de
            Yeguas. Construcción de 850m2/lote de 3000m2, 6 habitaciones, 18
            personas*, balcones, linda terraza y piscina privada con vista al
            campo de golf y las montañas, roof top, pérgolas, jacuzzi,
            bbq/tepanyaki, Chef*, Wifi, SmartTV/Cable, cocina totalmente dotada
            y linos.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contactanos
            </button>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
              Mira un <br /> video del alojamiento
            </button>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex items-center justify-center relative">
        <div>
          <img
            src="casa.png"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-2"
          />
          <div>
          <img
            src="casa1.png"
            className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover xl:mt-10 "
          />
          </div>
          <div>
          <img
            src="casa2.png"
            className="absolute w-[120px] h-[120px] md:w-[220px] md:h-[200px] object-cover xl:-mt-30 xl:ml-60 bottom-12"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
