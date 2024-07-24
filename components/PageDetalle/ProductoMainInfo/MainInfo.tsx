import PrecioProducto from "@/components/PrecioProducto";
import { Price } from "@/types/fetchTypes";
import React from "react";

interface Props {
  precio?: Price;
  marca: string;
  nombre: string;
  color: string;
}

export default function MainInfo({ precio, marca, nombre, color }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <header className="top-header flex justify-between items-center">
        <span className="text-xs font-semibold text-main-white/75">
          {marca}
        </span>
        <button className="bg-secondary-black rounded-full flex items-center p-2">
          <span className="icon-[tabler--heart-plus] h-5 w-5"></span>
        </button>
      </header>
      <h1 className="sm:text-sm lg:text-xl">{nombre}</h1>
      {precio ? (
        <PrecioProducto precio={precio} />
      ) : (
        <span className="font-nunito-sans font-bold text-lg lg:text-xl">
          25,99 €
        </span>
      )}
      <div className="grid sm:grid-cols-[1fr,2fr] md:grid-cols-1 items-center gap-4">
        <span className="first-letter:uppercase">
          color:{" "}
          <span className="font-bold text-sm rounded-full px-4 py-2 bg-secondary-black">
            {color}
          </span>
        </span>
      </div>
    </div>
  );
}
