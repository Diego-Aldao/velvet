"use client";
import { FetchProductos, FetchProductosProduct } from "@/types/fetchTypes";
import React, { useEffect, useState } from "react";
import Filtros from "./Filtros/Filtros";
import { BASE_URL_PRODUCTOS } from "@/constants";
import FetchDataClient from "@/services/fetchDataClient";
import { LocalFilters } from "@/types/localTypes";
import SkeletonPageProductos from "../skeletons/SkeletonPageProductos";
import objectToFilterString from "@/utils/objectToFilterString";
import { CardProductoGridFull } from "../cards/CardProductoGrid";
import ContainerMainGrid from "../containers/ContainerMainGrid";
import Loader from "./Loader";
import CantidadDeProductos from "./CantidadDeProductos";

interface Props {
  idCategoria: string;
}

export default function MainContent({ idCategoria }: Props) {
  const initialFilters: LocalFilters = {
    categoryId: idCategoria,
    offset: 0,
    sort: "freshness",
    limit: 48,
  };
  const stringFilters = objectToFilterString(initialFilters);

  const initialUrl = `${BASE_URL_PRODUCTOS}${stringFilters}`;
  const [currentUrl, setCurrentUrl] = useState<string>(initialUrl);
  const { data, loading } = FetchDataClient<FetchProductos>(currentUrl);

  const [fetchFilters, setFetchFilters] =
    useState<LocalFilters>(initialFilters);
  const [currentProductos, setCurrentProductos] = useState<
    FetchProductosProduct[]
  >([]);

  useEffect(() => {
    if (!data) return;
    if (fetchFilters.offset >= 1) {
      const nuevosProductos = [...currentProductos, ...data.products];
      setCurrentProductos(nuevosProductos);
    } else {
      setCurrentProductos(data.products);
    }
  }, [data]);

  useEffect(() => {
    const filtersString = objectToFilterString(fetchFilters);
    setCurrentUrl(`${BASE_URL_PRODUCTOS}${filtersString}`);
  }, [fetchFilters]);

  return (
    <>
      {loading && currentProductos.length < 1 && <SkeletonPageProductos />}
      {data && (
        <>
          <header>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tighter font-nunito-sans italic font-black">
              {data.categoryName}
            </h1>
          </header>
          <div className="contenidoProductos mt-12 lg:mt-20 grid gap-8 gap-x-4 lg:grid-cols-[270px,1fr] xl:grid-cols-[300px,1fr]">
            <Filtros
              filtros={data.facets}
              fetchFilters={fetchFilters}
              setFetchFilters={setFetchFilters}
            />
            <CantidadDeProductos itemCount={data.itemCount} />
            <ContainerMainGrid>
              {currentProductos.length >= 1 && (
                <>
                  {currentProductos.map((producto) => (
                    <CardProductoGridFull
                      key={producto.id}
                      id={producto.id}
                      nombre={producto.name}
                      marca={producto.brandName}
                      imgUrl={producto.imageUrl}
                      precio={producto.price}
                      color={producto.colour}
                      filtersForSimilars={fetchFilters}
                      secondaryImage={producto.additionalImageUrls[0]}
                    />
                  ))}
                </>
              )}
              <Loader
                itemCount={data.itemCount}
                fetchFilters={fetchFilters}
                setFetchFilters={setFetchFilters}
              />
            </ContainerMainGrid>
          </div>
        </>
      )}
    </>
  );
}
