"use client";
import React from "react";
import { IconButtonLink } from "../IconButton";
import { useProductContext } from "@/context/ProductsContext";

interface Props {
  customStyles?: string;
  nombre: "favoritos" | "carrito";
}

export default function UserInteractionButtonNav({
  customStyles,
  nombre,
}: Props) {
  const { favoritos, carrito } = useProductContext();
  const listado = nombre === "favoritos" ? favoritos : carrito;
  return (
    <div className="w-fit h-fit relative">
      <span
        className={`absolute right-0 text-xs font-semibold text-primary transition-all ${
          listado.length >= 1
            ? "-top-2 opacity-100 visible"
            : "top-1 opacity-0 invisible"
        }`}
      >
        {listado.length}
      </span>
      <IconButtonLink
        destino={`/${nombre}`}
        customIcon={`${
          nombre === "favoritos"
            ? "icon-[tabler--heart]"
            : "icon-[tabler--shopping-cart]"
        } w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7`}
        customStyles={`${
          listado.length >= 1 && "text-primary"
        } ${customStyles}`}
      />
    </div>
  );
}
