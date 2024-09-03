import AddFavoriteButton from "@/components/buttons/AddFavoriteButton";
import PrecioProducto from "@/components/PrecioProducto";
import { Brand, Price } from "@/types/fetchTypes";
import React from "react";

interface Props {
  precio?: Price;
  marca: Brand;
  nombre: string;
  color: string;
  imagen: string;
  id: number;
}

export default function MainInfo({
  precio,
  marca,
  nombre,
  color,
  id,
  imagen,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <header className="top-header flex justify-between items-center relative">
        <span className="font-semibold uppercase text-xs">{marca.name}</span>
        <AddFavoriteButton
          nombre={nombre}
          precio={precio?.current.text || "25,99"}
          color={color}
          marca={marca.name}
          id={id}
          imagen={imagen}
          customStyles="relative !top-0 !right-0 scale-110"
        />
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
