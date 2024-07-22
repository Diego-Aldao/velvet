"use client";
import React from "react";
import ProductoSubInfo from "./ProductoSubInfo";
import ProductoRelacionados from "./ProductoRelacionados";
import MediaSlider from "./MediaSlider";
import PageDetalleMainContainer from "../containers/PaginaDetalle/PageDetalleMainContainer";
import ImagePreMedia from "./ImagePreMedia";
import MainInfo from "./ProductoMainInfo/MainInfo";
import DetalleUserInteraction from "./DetalleUserInteraction";
import useProductDetail from "@/hooks/PageDetalle/useProductDetail";

interface Props {
  id: string;
}

export default function MainContent({ id }: Props) {
  const { producto } = useProductDetail(id);
  return (
    <PageDetalleMainContainer>
      {producto && (
        <>
          {producto.media ? (
            <MediaSlider media={producto.media} />
          ) : (
            <ImagePreMedia imgUrl={producto.imagen} />
          )}
          <div className="flex flex-col gap-4">
            <MainInfo
              marca={producto.marca}
              nombre={producto.nombre}
              color={producto.color}
              precio={producto.precio}
            />

            <DetalleUserInteraction
              variantes={producto.variants}
              nombre={producto.nombre}
              precioFinal={producto.precio?.current.text || "25,99 €"}
              color={producto.color}
            />
            {producto.descripcion && producto.info && (
              <ProductoSubInfo
                descripcion={producto.descripcion}
                info={producto.info}
              />
            )}
          </div>

          <ProductoRelacionados />
        </>
      )}
    </PageDetalleMainContainer>
  );
}
