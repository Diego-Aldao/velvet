"use client";
import { FetchProductos } from "@/types/fetchTypes";
import React, { useEffect, useState } from "react";
import Filtros from "./Filtros/Filtros";
import { BASE_URL_PRODUCTOS } from "@/constants";
import FetchDataClient from "@/services/fetchDataClient";
import { LocalFilters } from "@/types/localTypes";
import SkeletonPageProductos from "../skeletons/SkeletonPageProductos";
import objectToFilterString from "@/utils/objectToFilterString";
import CardProductoGrid from "../cards/CardProductoGrid";
import ContainerMainGrid from "../containers/ContainerMainGrid";

interface Props {
  idCategoria: string;
}
export default function MainContent({ idCategoria }: Props) {
  const initialFilters: LocalFilters = {
    categoryId: idCategoria,
    offset: 0,
    sort: "freshness",
    limit: 72,
  };
  const stringFilters = objectToFilterString(initialFilters);

  const initialUrl = `${BASE_URL_PRODUCTOS}${stringFilters}`;
  const [currentUrl, setCurrentUrl] = useState<string>(initialUrl);

  const { data, loading } = FetchDataClient<FetchProductos>(currentUrl);

  const [fetchFilters, setFetchFilters] = useState(initialFilters);
  const [currentProductos, setCurrentProductos] = useState<FetchProductos>();

  useEffect(() => {
    if (!data) return;
    setCurrentProductos(data);
  }, [data]);

  useEffect(() => {
    const filtersString = objectToFilterString(fetchFilters);
    setCurrentUrl(`${BASE_URL_PRODUCTOS}${filtersString}`);
  }, [fetchFilters]);

  return (
    <>
      {loading && <SkeletonPageProductos />}
      {currentProductos && (
        <>
          <header>
            <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl uppercase font-bold tracking-tight">
              {currentProductos.categoryName}
            </h1>
          </header>
          <div className="contenidoProductos mt-12 grid gap-8 lg:grid-cols-[300px,1fr] xl:grid-cols-[350px,1fr] lg:gap-4 xl:gap-8">
            <Filtros
              filtros={currentProductos.facets}
              fetchFilters={fetchFilters}
              setFetchFilters={setFetchFilters}
            />
            <ContainerMainGrid>
              {currentProductos.products.map((producto) => (
                <CardProductoGrid
                  key={producto.id}
                  id={producto.id}
                  nombre={producto.name}
                  marca={producto.brandName}
                  imgUrl={producto.imageUrl}
                  precio={producto.price.current.text}
                />
              ))}
            </ContainerMainGrid>
          </div>
        </>
      )}
    </>
  );
}
