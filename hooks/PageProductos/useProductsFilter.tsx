import { Facet, FacetValue } from "@/types/fetchTypes";
import { LocalFilters } from "@/types/localTypes";
import arrayToString from "@/utils/arrayToString";
import toggleSelectedValue from "@/utils/toggleSelectedValue";
import React, { useEffect, useState } from "react";

export default function useProductsFilter(
  filtro: Facet,
  fetchFilters: LocalFilters,
  setFetchFilters: React.Dispatch<React.SetStateAction<LocalFilters>>
) {
  const [currentFiltro, setCurrentFiltro] = useState<Facet>(filtro);

  useEffect(() => {
    const checkEmptyFiltersValues = (filterValue: FacetValue[]) => {
      return filterValue.every((filtro) => filtro.count === 0);
    };
    const filtroVacio = checkEmptyFiltersValues(filtro.facetValues);
    const nuevosFiltros = { ...filtro, filtroVacio: filtroVacio };
    setCurrentFiltro(nuevosFiltros);
  }, [filtro]);

  useEffect(() => {
    if (currentFiltro.hasSelectedValues) {
      const listadoDeIds = arrayToString(currentFiltro.facetValues);
      setFetchFilters({
        ...fetchFilters,
        offset: 0,
        [currentFiltro.id]: listadoDeIds,
      });
    } else {
      const nuevosFetchFilters = { ...fetchFilters };
      delete nuevosFetchFilters[currentFiltro.id];
      setFetchFilters(nuevosFetchFilters);
    }
  }, [currentFiltro]);

  const updateFetchFilters = (filtro: FacetValue) => {
    const filtrosValuesActualizados = toggleSelectedValue(
      currentFiltro.facetValues,
      filtro.id
    );
    const hayValoresSelected = filtrosValuesActualizados.some(
      (value) => value.isSelected
    );
    const nuevoFiltro = {
      ...currentFiltro,
      facetValues: filtrosValuesActualizados,
      hasSelectedValues: hayValoresSelected,
    };

    setCurrentFiltro(nuevoFiltro);
  };
  return { updateFetchFilters, currentFiltro };
}
