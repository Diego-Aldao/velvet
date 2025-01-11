"use client";
import useToggleBoolean from "@/hooks/useToggleBoolean";
import React from "react";
import DeleteButton from "../../buttons/PageCarrito/DeleteButton";
import SaveForLaterButton from "../../buttons/PageCarrito/SaveForLaterButton";
import { Current } from "@/types/fetchTypes";

interface Props {
  id: number;
  nombre: string;
  precio: Current;
  color: string;
  imagen: string;
  tamaño: string;
}

export default function CardMenu({
  id,
  nombre,
  precio,
  color,
  imagen,
  tamaño,
}: Props) {
  const { isTrue, handleToggle } = useToggleBoolean();
  return (
    <>
      <div
        className={`absolute w-full h-full bg-main-black/50 backdrop-blur-sm top-0 left-0 rounded-md px-2 pt-10 flex flex-col gap-2 sm:hidden ${
          isTrue ? "visible opacity-100" : "invisible opacity-0"
        } transition-opacity`}
      >
        <DeleteButton
          id={id}
          nombre={nombre}
          precio={precio}
          color={color}
          imagen={imagen}
          tamaño={tamaño}
          isFull={true}
          customStyles={`py-2 px-4 border-main-white/10 border rounded-md bg-main-black flex items-center mx-auto w-full max-w-[220px] justify-between ${
            isTrue ? "top-0 visible opacity-100" : "top-4 invisible opacity-0"
          } relative transition-all`}
        />
        <SaveForLaterButton
          id={id}
          nombre={nombre}
          precio={precio}
          color={color}
          imagen={imagen}
          tamaño={tamaño}
          customStyles={`w-full max-w-[220px] mx-auto justify-between px-4 bg-main-black ${
            isTrue
              ? "top-0 visible opacity-100 delay-75"
              : "top-4 invisible opacity-0"
          } relative transition-all`}
        />
      </div>
      <button className="sm:hidden h-6 w-6 relative z-[2] rounded-full border border-main-white/10 flex items-center justify-center">
        <span
          className={`icon-[tabler--dots-vertical] sm:hidden transition-transform ${
            isTrue ? "rotate-90" : "rotate-0"
          }`}
          onClick={handleToggle}
        ></span>
      </button>
    </>
  );
}
