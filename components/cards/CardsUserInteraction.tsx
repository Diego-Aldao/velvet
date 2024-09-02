"use client";
import React from "react";
import useFavoritos from "@/hooks/useFavoritos";

interface Props {
  nombre: string;
  precio: string;
  color: string;
  imagen: string;
  id: number;
  marca: string;
}

export default function CardsUserInteraction({
  nombre,
  precio,
  color,
  imagen,
  id,
  marca,
}: Props) {
  const { handleFavorito, itemFavorito } = useFavoritos({ id });

  return (
    <span className="interaccion absolute top-2 right-2 lg:top-5 sm:top-4 lg:right-5 sm:right-4 z-10 2xl:top-6 2xl:right-6 ">
      <span
        onClick={(e) => {
          handleFavorito(e, nombre, precio, color, imagen, "S", marca);
        }}
        className={`rounded-full relative h-8 w-8 2xl:h-9 2xl:w-9 bg-main-black/50 overflow-hidden flex items-center justify-center group/interaccion hover:shadow-secondary-black hover:bg-main-black shadow-md border border-transparent  transition-[border-color,box-shadow] cursor-pointer pointer-events-auto ${
          itemFavorito ? "hover:border-main-red" : "hover:border-primary"
        }`}
      >
        <span
          className={`icon-[tabler--heart-minus] transition-all text-primary group-hover/interaccion:text-main-red h-4 w-4 2xl:h-5 2xl:w-5 font-black absolute ${
            itemFavorito
              ? "top-2 opacity-100 visible"
              : "-top-10 opacity-0 invisible"
          }`}
        ></span>

        <span
          className={`icon-[tabler--heart-plus] transition-all text-main-white group-hover/interaccion:text-primary h-4 w-4 2xl:h-5 2xl:w-5 font-black absolute ${
            itemFavorito
              ? "top-10 opacity-0 invisible"
              : "top-2 opacity-100 visible"
          }`}
        ></span>
      </span>
    </span>
  );
}
