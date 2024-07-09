import Image from "next/image";
import React from "react";
import CardsUserInteraction from "./CardsUserInteraction";

interface Props {
  id: number;
  nombre: string;
  imgUrl: string;
  marca: string;
  precio: string;
}

export default function CardProductoGrid({
  id,
  nombre,
  imgUrl,
  marca,
  precio,
}: Props) {
  return (
    <article
      className="producto  rounded-md overflow-hidden flex flex-col gap-1 border-2 border-transparent relative  group transition-[border-color]"
      key={id}
    >
      <CardsUserInteraction />
      <div className="imagen relative rounded-md overflow-hidden group-hover:border-secondary transition-[border-color] border-2 border-transparent">
        <Image
          src={`https://${imgUrl}`}
          alt={nombre}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="info rounded-md border-2 border-transparent group-hover:border-secondary transition-[border-color] bg-secondary-black relative z-[2] flex flex-col gap-2 p-2">
        <span className="uppercase text-xs font-medium">{marca}</span>
        <span className="text-sm line-clamp-2">{nombre}</span>
        <span className=" uppercase font-semibold font-nunito-sans">
          {precio}
        </span>
      </div>
    </article>
  );
}
