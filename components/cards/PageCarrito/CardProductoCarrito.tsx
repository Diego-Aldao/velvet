import DeleteButton from "@/components/buttons/PageCarrito/DeleteButton";
import SaveForLaterButton from "@/components/buttons/PageCarrito/SaveForLaterButton";
import ContenedorImagen from "@/components/containers/ContenedorImagen";
import { Current } from "@/types/fetchTypes";
import Image from "next/image";
import React from "react";
import CardMenu from "@/components/ChekoutFlow/Carrito/CardMenu";

interface Props {
  id: number;
  imagen: string;
  nombre: string;
  color: string;
  tamaño: string;
  precio: Current;
}

export default function CardProductoCarrito({
  id,
  imagen,
  nombre,
  color,
  tamaño,
  precio,
}: Props) {
  return (
    <div className="card-carrito grid grid-cols-[110px,1fr] sm:grid-cols-[150px,1fr] md:grid-cols-[110px,1fr] lg:grid-cols-[150px,1fr] gap-2 sm:p-6 md:p-4 lg:p-6 rounded-md bg-secondary-black h-fit p-2 sm:gap-x-4 border border-main-white/10 relative">
      <ContenedorImagen customStyles="h-full">
        <Image
          src={`https://${imagen}`}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </ContenedorImagen>
      <div className="info flex flex-col gap-2 sm:gap-4">
        <header className="grid grid-cols-[1fr,24px] sm:grid-cols-[1fr,32px] lg:sm:grid-cols-[1fr,40px] gap-1 sm:gap-2 lg:gap-4">
          <span className="text-sm font-medium line-clamp-2 lg:line-clamp-3 sm:text-lg md:text-base lg:text-lg">
            {nombre}
          </span>
          <CardMenu
            id={id}
            nombre={nombre}
            precio={precio}
            color={color}
            imagen={imagen}
            tamaño={tamaño}
          />
          <DeleteButton
            id={id}
            nombre={nombre}
            precio={precio}
            color={color}
            imagen={imagen}
            tamaño={tamaño}
            customStyles="hidden sm:flex sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border border-transparent sm:p-1 sm:border-main-white/10 items-center justify-center"
          />
        </header>
        <ul className="sub-info flex gap-2 flex-wrap text-sm sm:text-base md:text-sm lg:text-base font-medium capitalize sm:gap-x-4">
          <span>
            <span>{color}</span>
          </span>
          <span>
            <div className="flex gap-2 sm:gap-4 items-center">
              <span className="text-main-white/10">|</span>
              <span className="font-nunito-sans">{tamaño}</span>
            </div>
          </span>
          <span>
            <div className="flex gap-2 sm:gap-4 items-center">
              <span className="text-main-white/10">|</span>
              <span className="font-nunito-sans">1</span>
            </div>
          </span>
        </ul>
        <footer className="mt-auto w-full flex justify-between items-center">
          <SaveForLaterButton
            customStyles="hidden sm:flex"
            id={id}
            nombre={nombre}
            precio={precio}
            color={color}
            imagen={imagen}
            tamaño={tamaño}
          />
          <span className="font-nunito-sans font-bold sm:text-lg md:text-base lg:text-lg xl:text-xl ml-auto">
            {precio.text}
          </span>
        </footer>
      </div>
    </div>
  );
}
