"use client";
import useFavoritos from "@/hooks/useFavoritos";
import { Current } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: number;
  nombre: string;
  precio: Current;
  color: string;
  imagen: string;
  tamaño: string;
  marca?: string;
}

export default function EliminarFavoritoButton({
  id,
  nombre,
  precio,
  color,
  imagen,
  tamaño,
  marca,
}: Props) {
  const { handleFavorito } = useFavoritos({ id });
  return (
    <button
      className="p-1 px-2 rounded-md border border-main-white/10 flex items-center gap-1 hover:border-main-red/80 hover:text-main-red transition-colors"
      onClick={(e) => {
        handleFavorito(e, nombre, precio, color, imagen, tamaño);
      }}
    >
      <span className="text-xs lg:text-sm first-letter:uppercase">
        eliminar
      </span>
      <span className="icon-[tabler--trash] w-3 h-3 lg:h-4 lg:w-4"></span>
    </button>
  );
}
