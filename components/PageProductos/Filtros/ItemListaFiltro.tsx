"use client";
import { Facet } from "@/types/fetchTypes";
import React, { useState } from "react";

interface Props {
  filtro: Facet;
}

function ItemLista({ filtro }: Props) {
  const [seleccionado, setSeleccionado] = useState<string>("");

  const handleClick = (nombre: string) => {
    setSeleccionado(nombre);
  };

  return (
    <li className="relative w-full">
      <span className="text-lg">{filtro.name}</span>
      <ul
        className={`pl-2 flex flex-col gap-2 mt-2 max-w-[95%] ${
          filtro.facetValues.length >= 20 && "max-h-[400px] overflow-y-scroll"
        }`}
      >
        {filtro.facetValues.map((filtroValue) => (
          <li
            key={filtroValue.id}
            className={`flex relative gap-1 items-center transition-all duration-500 bg-gradient-to-r to-transparent via-transparent via-50% from-main-black from-10% bg-size-200 bg-pos-100 hover:bg-pos-0 group cursor-pointer p-2 max-w-[95%] rounded-md ${
              seleccionado === filtroValue.name ? "bg-pos-0 " : "bg-pos-100"
            }`}
            onClick={() => {
              handleClick(filtroValue.name);
            }}
          >
            <span
              className={`text-sm group-hover:text-primary ${
                seleccionado === filtroValue.name
                  ? "text-primary"
                  : "text-main-white"
              }`}
            >
              {filtroValue.name}
            </span>
            <span
              className={`text-xs  group-hover:text-primary ${
                seleccionado === filtroValue.name
                  ? "text-primary/80"
                  : "text-main-white/80"
              }`}
            >
              ({filtroValue.count})
            </span>
            <div
              className={`indicador-selected ${
                seleccionado === filtroValue.name
                  ? "bg-primary right-0"
                  : "bg-transparent right-2"
              } transition-all absolute  w-2 h-1 rounded-full`}
            ></div>
          </li>
        ))}
      </ul>
    </li>
  );
}

function ItemListaRange({ filtro }: Props) {
  return (
    <li className="relative w-fit">
      <span className="flex flex-col gap-2">
        <span className="text-lg">{filtro.name}</span>
        <span className="w-full h-2 bg-primary block rounded-md"></span>
      </span>
    </li>
  );
}

export default function ItemListaFiltro({ filtro }: Props) {
  if (filtro.facetType === "TextMultiSelect") {
    return <ItemLista filtro={filtro} />;
  } else {
    return <ItemListaRange filtro={filtro} />;
  }
}
