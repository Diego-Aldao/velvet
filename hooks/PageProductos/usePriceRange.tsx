import { Facet } from "@/types/fetchTypes";
import { LocalFilters } from "@/types/localTypes";
import { SliderValue } from "@nextui-org/slider";
import React, { useEffect, useState } from "react";

export default function usePriceRange(
  filtroRange: Facet,
  initialRange: React.MutableRefObject<SliderValue | null>
) {
  let precioMinimo = Math.ceil(parseFloat(filtroRange.facetValues[0].name));
  let precioMaximo = Math.ceil(parseFloat(filtroRange.facetValues[1].name));
  const [initialPriceRange, setInitialPriceRange] = useState<number[]>([
    precioMinimo,
    precioMaximo,
  ]);
  const [currentPriceRange, setCurrentRangePrice] = useState<SliderValue>();

  useEffect(() => {
    if (precioMinimo === precioMaximo) {
      setInitialPriceRange([precioMinimo, precioMaximo + 1]);
    } else {
      setInitialPriceRange([precioMinimo, precioMaximo]);
    }
    setCurrentRangePrice([precioMinimo, precioMaximo]);
    if (initialRange.current !== null) return;
    initialRange.current = [precioMinimo, precioMaximo];
  }, [filtroRange]);

  const updateFetchFilters = (
    priceRange: SliderValue | React.MutableRefObject<SliderValue | null>,
    fetchFilters: LocalFilters,
    setFetchFilters: React.Dispatch<React.SetStateAction<LocalFilters>>
  ) => {
    const precioMinimoString = Array(priceRange).join().split(",")[0];
    const precioMaximoString = Array(priceRange).join().split(",")[1];
    const nuevosFetchFilters = {
      ...fetchFilters,
      priceMin: precioMinimoString,
      priceMax: precioMaximoString,
    };
    console.log("updated", nuevosFetchFilters);
    setFetchFilters(nuevosFetchFilters);
  };

  return {
    initialPriceRange,
    currentPriceRange,
    updateFetchFilters,
    setCurrentRangePrice,
  };
}
