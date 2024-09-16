"use client";
import { useProductContext } from "@/context/ProductsContext";
import React from "react";
import Pago from "./Pago";
import CardProductoCarrito from "@/components/cards/PageCarrito/CardProductoCarrito";
import CarritoVacio from "./CarritoVacio";

export default function MainContent() {
  const { carrito } = useProductContext();
  return (
    <section
      className={`max-w-7xl mx-auto w-full ${
        carrito.length >= 1 &&
        "grid gap-8 md:grid-cols-[2fr,1.2fr] lg:grid-cols-[1fr,350px] md:gap-4 lg:gap-8 min-h-[calc(100vh-160px)] md:min-h-[50vh]"
      }`}
    >
      {carrito.length >= 1 ? (
        <>
          <div className="contenedor-productos flex flex-col gap-4">
            {carrito.map((item) => (
              <CardProductoCarrito
                key={item.id}
                nombre={item.nombre}
                imagen={item.imagen}
                color={item.color}
                precio={item.precioFinal}
                id={item.id}
                tamaño={item.tamaño}
              />
            ))}
          </div>
          <Pago />
        </>
      ) : (
        <CarritoVacio />
      )}
    </section>
  );
}
