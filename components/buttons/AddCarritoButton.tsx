"use client";
import useCarrito from "@/hooks/useCarrito";
import { Current } from "@/types/fetchTypes";
import React from "react";

interface Props {
  selectedSize: null | string;
  setNoVariantError: React.Dispatch<React.SetStateAction<boolean>>;
  nombre: string;
  precio: Current | undefined;
  color: string;
  imagen: string;
  id: number;
  marca: string;
}

export default function AddCarritoButton({
  selectedSize,
  setNoVariantError,
  nombre,
  color,
  imagen,
  marca,
  precio,
  id,
}: Props) {
  const { handleItemCarrito, itemCarrito } = useCarrito({ id });

  const handleClick = () => {
    if (selectedSize === null) {
      setNoVariantError(true);
    } else {
      handleItemCarrito(nombre, precio, color, imagen, selectedSize, marca);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`py-2 px-3 uppercase font-semibold text-sm border bg-secondary-black border-main-white transition-colors rounded-full w-full flex items-center justify-center h-10 relative ${
        itemCarrito
          ? "hover:text-main-red hover:border-main-red border-primary text-primary"
          : "hover:text-primary hover:border-primary border-main-white text-main-white"
      } ${!selectedSize && "opacity-50 cursor-not-allowed"}`}
    >
      <span
        className={`absolute inline-block transition-all ${
          itemCarrito
            ? "-top-4 opacity-0 invisible"
            : "top-2 opacity-100 visible"
        }`}
      >
        añadir al carrito
      </span>
      <span
        className={`absolute inline-block transition-all ${
          itemCarrito
            ? "top-2 opacity-100 visible"
            : "top-4 opacity-0 invisible"
        }`}
      >
        quitar del carrito
      </span>
    </button>
  );
}
