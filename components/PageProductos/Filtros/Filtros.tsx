"use client";
import { Facet } from "@/types/fetchTypes";
import React, { useState } from "react";
import ItemListaFiltro from "./ItemListaFiltro";
import { LISTADO_ORDEN_FILTROS_PRODUCTOS } from "@/constants";

interface Props {
  filtros: Facet[];
}

export default function Filtros({ filtros }: Props) {
  const [filtersMobileVisible, setFiltersMobileVisible] =
    useState<boolean>(false);

  const handleClick = () => {
    setFiltersMobileVisible((filtersMobileVisible) => !filtersMobileVisible);
  };

  return (
    <div className="filtros flex">
      <button
        onClick={handleClick}
        className="btn-filtros w-full max-w-[450px] bg-secondary py-2 uppercase rounded-md mx-auto lg:hidden"
      >
        filtrar
      </button>
      <div
        onClick={handleClick}
        className={`contenedor-filtros-mobile fixed w-full bottom-0 left-0 h-full flex items-end lg:relative lg:bottom-auto lg:top-0 lg:h-fit lg:opacity-100 lg:visible lg:z-[90] bg-main-black/75 ${
          filtersMobileVisible
            ? "opacity-100 visible z-[90]"
            : "opacity-0 invisible z-[-90]"
        }`}
      >
        <div
          className="contenedor-mobile flex flex-col gap-4 p-4 bg-secondary-black  rounded-t-md lg:rounded-md w-full"
          onClick={(e) => {
            e.stopPropagation();
          }} /*el contenedor tiene un on click para cerrarse si se clickea fuera de los filtros
          este stop propagation es para evitar cerrar los filtros al hacer click dentro de ellos */
        >
          <button
            onClick={handleClick}
            className="btn-cerrar bg-main-black h-9 w-9 flex items-center justify-center self-end rounded-full lg:hidden"
          >
            <span className="icon-[tabler--x] h-5 w-5 "></span>
          </button>
          <ul className="listado-filtros grid sm:grid-cols-2 w-full h-[450px] lg:h-fit lg:grid-cols-1 overflow-x-hidden overflow-y-scroll lg:overflow-hidden gap-8">
            <li className="relative w-full">
              <span className="text-lg first-letter:uppercase">
                Ordenar por
              </span>
              <ul className="pl-2 flex flex-col gap-2 mt-2 max-h-[400px]">
                {LISTADO_ORDEN_FILTROS_PRODUCTOS.map((orden) => (
                  <li className="flex gap-1 items-center" key={orden.id}>
                    <span className="text-sm first-letter:uppercase">
                      {orden.nombre}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
            {filtros.map((filtro) => (
              <ItemListaFiltro filtro={filtro} key={filtro.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
