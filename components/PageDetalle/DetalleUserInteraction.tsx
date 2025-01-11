"use client";
import { Current, Variant } from "@/types/fetchTypes";
import React, { useState } from "react";
import AddCarritoButton from "../buttons/AddCarritoButton";
import ComprarButton from "../buttons/ComprarButton";

interface Props {
  variantes?: Variant[];
  nombre: string;
  precio: Current | undefined;
  color: string;
  imagen: string;
  id: number;
  marca: string;
}

export default function DetalleUserInteraction({
  variantes,
  nombre,
  precio,
  color,
  imagen,
  id,
  marca,
}: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [noVariantError, setNoVariantError] = useState<boolean>(false);

  const handleVariante = (tamaño: string) => {
    setSelectedSize(tamaño);
    setNoVariantError(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex items-center gap-4">
        <span className="first-letter:uppercase  inline-block line-clamp-1 ">
          talle:
        </span>
        <span
          className={`flex items-center gap-2 relative transition-all ${
            noVariantError
              ? "visible opacity-100 top-0"
              : "invisible opacity-0 top-1"
          }`}
        >
          <span className="icon-[tabler--alert-circle-filled] h-5 w-5 text-main-red"></span>
          <span className="text-xs lg:text-sm first-letter:uppercase text-main-red font-semibold">
            elegi una opción
          </span>
        </span>
      </div>
      {variantes && (
        <ul className="flex gap-2 flex-wrap w-full items-center">
          {variantes.map((variante) => (
            <li
              key={variante.id}
              onClick={() => handleVariante(variante.brandSize)}
              className={`cursor-pointer rounded-full p-1 px-3 flex border hover:bg-primary hover:border-primary hover:text-main-black items-center justify-center transition-colors ${
                selectedSize === variante.brandSize
                  ? "bg-primary !text-main-black"
                  : "bg-secondary-black text-main-white"
              } ${
                noVariantError
                  ? "border-[#c20e4d] text-[#c20e4d]"
                  : "border-transparent text-main-white"
              }`}
            >
              <span className="text-sm font-semibold font-nunito-sans">
                {variante.brandSize}
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="w-full flex flex-col sm:flex-row md:flex-col gap-4">
        <ComprarButton
          selectedSize={selectedSize}
          setNoVariantError={setNoVariantError}
          nombre={nombre}
          color={color}
          imagen={imagen}
          marca={marca}
          precio={precio}
          id={id}
        />
        <AddCarritoButton
          selectedSize={selectedSize}
          setNoVariantError={setNoVariantError}
          nombre={nombre}
          color={color}
          imagen={imagen}
          marca={marca}
          precio={precio}
          id={id}
        />
      </div>
    </div>
  );
}
