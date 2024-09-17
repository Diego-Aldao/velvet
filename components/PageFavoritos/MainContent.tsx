"use client";
import React from "react";
import { useProductContext } from "@/context/ProductsContext";
import Link from "next/link";
import SinProductos from "./SinProductos";
import CardProductoFavoritos from "../cards/PageFavoritos/CardProductoFavoritos";

export default function MainContent() {
  const { favoritos } = useProductContext();
  return (
    <>
      {favoritos.length >= 1 ? (
        <div
          className={`grid gap-4 ${favoritos.length >= 2 && "sm:grid-cols-2"} ${
            favoritos.length >= 3 && "xl:grid-cols-3"
          } w-full`}
        >
          {favoritos.map((favorito) => (
            <CardProductoFavoritos
              key={favorito.id}
              id={favorito.id}
              nombre={favorito.nombre}
              precio={favorito.precio}
              color={favorito.nombre}
              tamaño={favorito.tamaño}
              imagen={favorito.imagen}
              cantidadFavoritos={favoritos.length}
            />
          ))}
        </div>
      ) : (
        <SinProductos
          titulo="parece que no tienes artículos favoritos"
          icono="icon-[tabler--heart-exclamation]"
        >
          <Link
            href="/"
            className="border uppercase border-main-white/10 rounded-md bg-main-black py-2 px-4 flex items-center gap-2 lg:gap-4 hover:border-primary/50 hover:text-primary transition-colors w-fit"
          >
            <span className="text-xs lg:text-sm">ir al inicio</span>
            <span className="icon-[tabler--home] h-4 lg:h-5 w-4 lg:w-5"></span>
          </Link>
        </SinProductos>
      )}
    </>
  );
}
