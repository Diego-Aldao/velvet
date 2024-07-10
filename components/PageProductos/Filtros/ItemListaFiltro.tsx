"use client";
import { Facet } from "@/types/fetchTypes";
import React, { useRef } from "react";
import { LocalFilters } from "@/types/localTypes";
import { Slider, SliderValue } from "@nextui-org/slider";
import usePriceRange from "@/hooks/PageProductos/usePriceRange";
import useProductsFilter from "@/hooks/PageProductos/useProductsFilter";

interface Props {
  filtro: Facet;
  setFetchFilters: React.Dispatch<React.SetStateAction<LocalFilters>>;
  fetchFilters: LocalFilters;
}

function ItemLista({ filtro, setFetchFilters, fetchFilters }: Props) {
  const { updateFetchFilters, currentFiltro } = useProductsFilter(
    filtro,
    fetchFilters,
    setFetchFilters
  );

  if (currentFiltro.filtroVacio) return;

  return (
    <li className="relative w-full">
      <span className="text-lg">{filtro.name}</span>
      <ul
        className={`pl-2 flex flex-col gap-2 mt-2 max-w-[95%] ${
          currentFiltro.facetValues.length >= 20 &&
          "max-h-[400px] overflow-y-scroll"
        }`}
      >
        {currentFiltro.facetValues.map((filtroValue) => {
          if (filtroValue.count === 0) return;
          return (
            <li
              key={filtroValue.id}
              className={`flex relative gap-1 items-center transition-all duration-500 bg-gradient-to-r to-transparent via-transparent via-50% from-main-black from-10% bg-size-200 bg-pos-100 hover:bg-pos-0 group cursor-pointer p-2 max-w-[95%] rounded-md ${
                filtroValue.isSelected ? "bg-pos-0 " : "bg-pos-100"
              }`}
              onClick={() => {
                updateFetchFilters(filtroValue);
              }}
            >
              <span
                className={`text-sm group-hover:text-primary ${
                  filtroValue.isSelected ? "text-primary" : "text-main-white"
                }`}
              >
                {filtroValue.name}
              </span>
              <span
                className={`text-xs  group-hover:text-primary ${
                  filtroValue.isSelected
                    ? "text-primary/80"
                    : "text-main-white/80"
                }`}
              >
                ({filtroValue.count})
              </span>
              <span
                className={`indicador-selected ${
                  filtroValue.isSelected
                    ? "bg-primary right-0"
                    : "bg-transparent right-2"
                } transition-all absolute  w-2 h-1 rounded-full`}
              ></span>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

function ItemListaRange({ filtro, setFetchFilters, fetchFilters }: Props) {
  const initialRange = useRef<SliderValue | null>(null);
  const {
    initialPriceRange,
    currentPriceRange,
    updateFetchFilters,
    setCurrentRangePrice,
  } = usePriceRange(filtro, initialRange);

  return (
    <li className="relative w-full max-w-[95%] flex flex-col gap-2">
      <button
        className="bg-main-black py-1 px-4 rounded-full capitalize self-end text-sm"
        onClick={() =>
          updateFetchFilters(initialRange, fetchFilters, setFetchFilters)
        }
      >
        reiniciar
      </button>
      {currentPriceRange && (
        <Slider
          label="Rango de precios"
          step={1}
          size="sm"
          minValue={initialPriceRange[0]}
          maxValue={initialPriceRange[1]}
          value={currentPriceRange}
          onChange={setCurrentRangePrice}
          onChangeEnd={() =>
            updateFetchFilters(currentPriceRange, fetchFilters, setFetchFilters)
          }
          formatOptions={{ style: "currency", currency: "EUR" }}
          classNames={{
            track: "bg-main-black",
            thumb: "bg-secondary-black border-2 border-primary",
          }}
        />
      )}
    </li>
  );
}

export default function ItemListaFiltro({
  filtro,
  setFetchFilters,
  fetchFilters,
}: Props) {
  return (
    <>
      {filtro.facetType === "TextMultiSelect" ? (
        <ItemLista
          filtro={filtro}
          setFetchFilters={setFetchFilters}
          fetchFilters={fetchFilters}
        />
      ) : (
        <ItemListaRange
          filtro={filtro}
          setFetchFilters={setFetchFilters}
          fetchFilters={fetchFilters}
        />
      )}
    </>
  );
}
