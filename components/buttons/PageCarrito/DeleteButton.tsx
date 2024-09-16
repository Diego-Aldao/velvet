"use client";
import useCarrito from "@/hooks/useCarrito";
import { Current } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: number;
  nombre: string;
  precio: Current;
  color: string;
  imagen: string;
  tamaño: string;
  customStyles?: string;
  isFull?: boolean;
}

export default function DeleteButton({
  nombre,
  precio,
  color,
  imagen,
  tamaño,
  id,
  customStyles,
  isFull,
}: Props) {
  const { handleItemCarrito } = useCarrito({ id });
  return (
    <button
      className={`${customStyles} hover:border-main-red/50 hover:text-main-red transition-colors`}
      onClick={() => {
        handleItemCarrito(nombre, precio, color, imagen, tamaño);
      }}
    >
      {isFull && (
        <span className="text-sm first-letter:capitalize">
          quitar del carrito
        </span>
      )}
      <span
        className={`icon-[tabler--trash] ${
          isFull ? "w-4 h-4" : "lg:h-5 lg:w-5"
        }`}
      ></span>
    </button>
  );
}
