"use client";
import { BASE_URL_PRODUCTOS } from "@/constants";
import FetchDataClient from "@/services/fetchDataClient";
import { FetchProductos, FetchProductosProduct } from "@/types/fetchTypes";
import { LocalFilters } from "@/types/localTypes";
import objectToFilterString from "@/utils/objectToFilterString";
import { useEffect, useState } from "react";

export default function useSimilarProducts() {
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [productos, setProductos] = useState<FetchProductosProduct[]>();
  const { data, loading } = FetchDataClient<FetchProductos>(currentUrl);

  useEffect(() => {
    const filtersFromLS = localStorage.getItem("currentFilters");
    if (filtersFromLS) {
      const filtersFromLSParsed: LocalFilters = JSON.parse(filtersFromLS);
      const fetchFilters = objectToFilterString(filtersFromLSParsed);
      setCurrentUrl(`${BASE_URL_PRODUCTOS}${fetchFilters}`);
    }
  }, []);

  useEffect(() => {
    if (!data) return;
    const nuevosProductos = data.products.slice(0, 20);
    setProductos(nuevosProductos);
  }, [data]);

  return { productos, loading };
}
