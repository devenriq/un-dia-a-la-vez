import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import { benefits } from "../../data/benefits";
import CaminoBlobMobile from "../../assets/CaminoBlobMobile";
import CaminoBlobDesktop from "../../assets/CaminoBlobDesktop";

export const Benefits = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [selectedBenefitDescription, setSelectedBenefitDescription] = useState(
    benefits[0].description
  );

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleBenefitClick = (description) => {
    setSelectedBenefitDescription(description);
  };

  const currentBenefit = benefits[currentImageIndex];

  return (
    <section className="bg-lemon-green bg-opacity-50 mx-auto flex flex-col px-6 py-16 items-center lg:px-32 lg:items-start">
      <div className="text-gray-8 lg:w-full lg:min-height-fit">
        <div className="relative md:hidden max-w-xs">
          <h2>Te ayudamos a encontrar tu camino.</h2>
          <strong>Un día a la vez</strong>
          <CaminoBlobMobile />
          <p className="absolute top-56 left-14">
            Te <span className="font-bold">acompañamos</span> en cada fase del
            proceso de sanación
          </p>
          <p className="absolute top-[400px] left-14">
            <span className="font-bold">No hay límites</span> geográficos
          </p>
          <p className="absolute top-[600px] left-10">
            Un espacio <span className="font-bold">amigable</span> y{" "}
            <span className="font-bold">seguro</span>
          </p>
        </div>

        <div className="hidden relative w-full md:flex md:text-h6 md:min-h-[500px] md:items-center md:justify-center lg:text-h5 xl:my-20">
          <h2 className="absolute top-0 left-0 md:text-h5 lg:text-h4 lg:left-32 xl:left-28">
            Te ayudamos a encontrar tu camino.
            <br />
            <strong>Un día a la vez</strong>
          </h2>
          <div className="md:min-w-[700px] lg:min-w-[780px] lg:my-40 xl:min-w-[1050px]">
            <CaminoBlobDesktop />
          </div>

          <p className="absolute md:top-[110px] md:left-[200px] lg:top-[160px] lg:left-[430px] ">
            <span className="font-bold">No hay límites</span> geográficos
          </p>
          <div className="absolute bottom-6 w-full h-auto flex gap-6 xl:gap-[110px] xl:left-[250px]">
            <p className="w-80">
              Te acompañamos en cada fase del proceso de sanación
            </p>
            <p className="">
              Un espacio <span className="font-bold">amigable</span> y{" "}
              <span className="font-bold">seguro</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
