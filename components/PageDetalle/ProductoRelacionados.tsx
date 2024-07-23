"use client";
import React from "react";

import { CardProductoGridSimple } from "../cards/CardProductoGrid";
import useSimilarProducts from "@/hooks/PageDetalle/useSimilarProducts";

export default function ProductoRelacionados() {
  const { productos } = useSimilarProducts();

  return (
    <>
      {productos && (
        <section className="w-full md:col-span-2 py-20 flex flex-col gap-8">
          <header>
            <h2 className="uppercase font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              puede que también te guste
            </h2>
          </header>
          <div className="grid-cols-[repeat(auto-fill,minmax(136px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-4 grid w-full">
            {productos.map((producto) => (
              <CardProductoGridSimple
                id={producto.id}
                nombre={producto.name}
                imgUrl={producto.imageUrl}
                key={producto.id}
                marca={producto.brandName}
                precio={producto.price}
                color={producto.colour}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
