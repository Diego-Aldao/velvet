import EliminarFavoritoButton from "@/components/buttons/PageFavoritos/EliminarFavoritoButton";
import ContenedorImagen from "@/components/containers/ContenedorImagen";
import { Current } from "@/types/fetchTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  nombre: string;
  precio: Current;
  color: string;
  imagen: string;
  tamaño: string;
  cantidadFavoritos: number;
}

export default function CardProductoFavoritos({
  id,
  nombre,
  precio,
  color,
  imagen,
  tamaño,
  cantidadFavoritos,
}: Props) {
  return (
    <div
      className={`card-favorito gap-2 p-2 border border-main-white/20 rounded-md bg-secondary-black grid grid-cols-[100px,1fr]  mx-auto ${
        cantidadFavoritos >= 2
          ? "max-w-[400px] lg:max-w-full"
          : "max-w-[500px] lg:max-w-[650px]"
      } lg:grid-cols-[140px,1fr] w-full`}
    >
      <ContenedorImagen>
        <Image
          src={`https://${imagen}`}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </ContenedorImagen>
      <div className="info flex flex-col gap-2">
        <span className="text-sm line-clamp-2 lg:text-base">{nombre}</span>
        <span className="font-nunito-sans font-semibold text-lg lg:text-xl">
          {precio.text}
        </span>
        <div className="botones self-end mt-auto flex gap-2">
          <Link
            href={`detalle/${id}`}
            className="p-1 px-2 rounded-md border border-main-white/10 flex items-center gap-1 hover:border-primary/50 hover:text-primary transition-colors"
          >
            <span className="text-xs lg:text-sm first-letter:uppercase">
              ver detalle
            </span>
            <span className="icon-[tabler--arrow-narrow-right] w-3 h-3 lg:h-4 lg:w-4"></span>
          </Link>
          <EliminarFavoritoButton
            id={id}
            nombre={nombre}
            precio={precio}
            imagen={imagen}
            color={color}
            tamaño={tamaño}
          />
        </div>
      </div>
    </div>
  );
}
