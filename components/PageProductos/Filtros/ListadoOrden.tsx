"use client";
import { LISTADO_ORDEN_FILTROS_PRODUCTOS } from "@/constants";
import { LocalFilters, LocalOrden } from "@/types/localTypes";
import React, { useEffect, useState } from "react";

interface Props {
  setFetchFilters: React.Dispatch<React.SetStateAction<LocalFilters>>;
  fetchFilters: LocalFilters;
}

export default function ListadoOrden({ setFetchFilters, fetchFilters }: Props) {
  const [currentListado, setCurrentListado] = useState<LocalOrden[]>(
    LISTADO_ORDEN_FILTROS_PRODUCTOS
  );

  useEffect(() => {
    const ordenActivo = currentListado.filter((orden) => orden.isSelected)[0];
    const nuevosFiltros = { ...fetchFilters, sort: ordenActivo.value };
    setFetchFilters(nuevosFiltros);
  }, [currentListado]);

  const handleClick = (orden: LocalOrden) => {
    if (orden.isSelected) return;
    const nuevoListado = currentListado.map((itemListado) => {
      if (itemListado.id !== orden.id) {
        return { ...itemListado, isSelected: false };
      } else return { ...itemListado, isSelected: true };
    });
    setCurrentListado(nuevoListado);
  };

  return (
    <li className="relative w-full">
      <span className="text-sm lg:text-base first-letter:uppercase font-medium">
        Ordenar por
      </span>
      <ul className="pl-2 flex flex-col gap-2 mt-2 max-h-[400px]">
        {currentListado.map((orden, i) => (
          <li
            key={i}
            className={`flex relative gap-1 items-center transition-all duration-500 bg-gradient-to-r to-transparent via-transparent via-50% from-main-black from-10% bg-size-200 bg-pos-100 hover:bg-pos-0 group cursor-pointer p-2 max-w-[95%] rounded-md`}
            onClick={() => {
              handleClick(orden);
            }}
          >
            <span
              className={`text-xs lg:text-sm group-hover:text-primary capitalize ${
                orden.isSelected ? "text-primary" : "text-main-white"
              }`}
            >
              {orden.nombre}
            </span>

            <span
              className={`indicador-selected capitalize ${
                orden.isSelected
                  ? "bg-primary right-0"
                  : "bg-transparent right-2"
              } transition-all absolute  w-2 h-1 rounded-full`}
            ></span>
          </li>
        ))}
      </ul>
    </li>
  );
}
