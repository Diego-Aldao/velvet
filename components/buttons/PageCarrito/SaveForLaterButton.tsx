"use client";
import useCarrito from "@/hooks/useCarrito";
import useFavoritos from "@/hooks/useFavoritos";
import { Current } from "@/types/fetchTypes";
import React from "react";

interface Props {
  customStyles?: string;
  id: number;
  nombre: string;
  precio: Current;
  color: string;
  imagen: string;
  tamaño: string;
}

export default function SaveForLaterButton({
  customStyles,
  id,
  nombre,
  precio,
  color,
  imagen,
  tamaño,
}: Props) {
  const { handleFavorito, itemFavorito } = useFavoritos({ id });
  const { handleItemCarrito } = useCarrito({ id });
  return (
    <button
      onClick={(e) => {
        handleItemCarrito(nombre, precio, color, imagen, tamaño);
        handleFavorito(e, nombre, precio, color, imagen, tamaño);
      }}
      className={`flex items-center p-2 lg:px-4 gap-2 border border-main-white/10 rounded-md ${customStyles} ${
        itemFavorito && "!hidden"
      } hover:border-primary/50 transition-colors hover:text-primary`}
    >
      <span className="first-letter:uppercase text-sm md:text-xs lg:text-sm">
        guardar para mas tarde
      </span>
      <span className="icon-[tabler--heart-plus]"></span>
    </button>
  );
}
