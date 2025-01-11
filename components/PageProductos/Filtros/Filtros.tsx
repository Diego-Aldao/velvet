"use client";
import { Facet } from "@/types/fetchTypes";
import React, { useState } from "react";
import ItemListaFiltro from "./ItemListaFiltro";
import { LocalFilters } from "@/types/localTypes";
import ListadoOrden from "./ListadoOrden";

interface Props {
  filtros: Facet[];
  fetchFilters: LocalFilters;
  setFetchFilters: React.Dispatch<React.SetStateAction<LocalFilters>>;
}

export default function Filtros({
  filtros,
  fetchFilters,
  setFetchFilters,
}: Props) {
  const [filtersMobileVisible, setFiltersMobileVisible] =
    useState<boolean>(false);

  const handleClick = () => {
    setFiltersMobileVisible((filtersMobileVisible) => !filtersMobileVisible);
  };

  return (
    <div className="flex">
      <button
        onClick={handleClick}
        className="w-full max-w-[450px] bg-secondary py-2 uppercase rounded-md mx-auto lg:hidden"
      >
        filtrar
      </button>
      <div
        onClick={handleClick}
        className={`fixed w-full bottom-0 left-0 h-full flex items-end lg:relative lg:bottom-auto lg:top-0 lg:h-fit lg:opacity-100 lg:visible lg:z-[1] bg-main-black/75 transition-opacity ${
          filtersMobileVisible
            ? "opacity-100 visible z-[90] delay-0"
            : "opacity-0 invisible z-[-90] delay-200"
        }`}
      >
        <div
          className={`flex flex-col gap-4 p-4 bg-secondary-black rounded-t-md lg:rounded-md w-full relative transition-all ${
            filtersMobileVisible
              ? "bottom-0 opacity-100 delay-200"
              : "-bottom-4 opacity-0 delay-0 lg:opacity-100 lg:visible"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }} /*el contenedor tiene un on click para cerrarse si se clickea fuera de los filtros
          este stop propagation es para evitar cerrar los filtros al hacer click dentro de ellos */
        >
          <button
            onClick={handleClick}
            className={`bg-main-black h-9 w-9 flex items-center justify-center self-end rounded-full lg:hidden relative transition-all ${
              filtersMobileVisible
                ? "top-0 opacity-100 delay-300"
                : "-top-4 opacity-0 delay-0"
            }`}
          >
            <span className="icon-[tabler--x] h-5 w-5 "></span>
          </button>
          <ul className="grid sm:grid-cols-2 w-full h-[450px] lg:h-fit lg:grid-cols-1 overflow-x-hidden overflow-y-scroll lg:overflow-hidden gap-8">
            <ListadoOrden
              fetchFilters={fetchFilters}
              setFetchFilters={setFetchFilters}
            />
            {filtros.map((filtro) => (
              <ItemListaFiltro
                filtro={filtro}
                key={filtro.id}
                fetchFilters={fetchFilters}
                setFetchFilters={setFetchFilters}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
