"use client";
import React, { useState } from "react";
import { MainButtonInteractive } from "../buttons/MainButton";
import ModalRegistro from "../registro/ModalRegistro";

export default function Oferta() {
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);

  const handleClick = () => {
    setPopUpVisible(true);
  };

  return (
    <section className="flex px-4 md:px-10 lg:px-12 flex-col gap-4 pt-12 pb-4 items-center justify-center mb-20 bg-secondary text-center">
      <span className="uppercase text-sm font-nunito-sans text-main-white font-bold lg:text-base ">
        velvet premier party
      </span>
      <span className="uppercase text-main-white text-3xl max-w-[300px] md:max-w-full sm:text-3xl font-bold md:text-4xl">
        hazte miembro por el 25% en todo mañana!
      </span>
      <MainButtonInteractive
        nombreDestino="registrarme"
        handleClick={handleClick}
        customStyles="px-6 py-2 uppercase !text-sm lg:text-base"
      />
      <ModalRegistro
        modalVisible={popUpVisible}
        setModalVisible={setPopUpVisible}
      />
      <span className="text-[10px] text-main-white font-medium mt-4">
        Se aplican terminos y condiciones. Solo por tiempo limitado
      </span>
    </section>
  );
}
