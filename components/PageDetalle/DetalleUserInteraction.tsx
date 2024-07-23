"use client";

import { useProductContext } from "@/context/ProductsContext";
import { Variant } from "@/types/fetchTypes";
import { LocalProductInteraction } from "@/types/localTypes";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  variantes?: Variant[];
  nombre: string;
  precioFinal: string;
  color: string;
  imagen: string;
  id: number;
}

export default function DetalleUserInteraction({
  variantes,
  nombre,
  precioFinal,
  color,
  imagen,
  id,
}: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [noVariantError, setNoVariantError] = useState<boolean>(false);
  const { updateCarrito } = useProductContext();
  const router = useRouter();

  const handleVariante = (tamaño: string) => {
    setSelectedSize(tamaño);
    setNoVariantError(false);
  };

  const checkVariantAndUpdate = () => {
    if (selectedSize === null) {
      setNoVariantError(true);
    } else {
      const articuloCarrito: LocalProductInteraction = {
        nombre: nombre,
        color: color,
        imagen: imagen,
        variantes: variantes,
        tamaño: selectedSize,
        precioFinal: precioFinal,
        id: id,
      };
      updateCarrito(articuloCarrito);
    }
  };

  const handleComprar = () => {
    checkVariantAndUpdate();
    router.push("/checkout");
  };
  const handleAñadirAlCarrito = () => {
    checkVariantAndUpdate();
  };

  return (
    <div className="flex flex-col gap-4">
      {variantes && (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center">
          <span className="first-letter:uppercase">elegir tamaño:</span>
          <ul className="flex gap-2">
            {variantes.map((variante) => (
              <li
                key={variante.id}
                onClick={() => handleVariante(variante.brandSize)}
                className={`rounded-full p-2 w-10 h-10 md:w-9 md:h-9 xl:w-10 xl:h-10 flex border border-transparent hover:bg-primary hover:text-main-black items-center justify-center transition-colors ${
                  selectedSize === variante.brandSize
                    ? "bg-primary !text-main-black"
                    : "bg-secondary-black text-main-white"
                } ${
                  noVariantError
                    ? "border-[#c20e4d] text-[#c20e4d]"
                    : "border-transparent text-main-white"
                }`}
              >
                <span className="text-sm font-bold">{variante.brandSize}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-full flex flex-col sm:flex-row md:flex-col gap-4">
        <button
          onClick={handleComprar}
          className="py-2 px-3 uppercase font-bold text-sm border border-primary bg-primary text-main-black rounded-full w-full md:px-3"
        >
          comprar ahora
        </button>
        <button
          onClick={handleAñadirAlCarrito}
          className="py-2 px-3 uppercase text-primary font-semibold text-sm border border-primary rounded-full w-full "
        >
          añadir al carrito
        </button>
      </div>
    </div>
  );
}
