import Link from "next/link";
import React from "react";

const listadoBotones = [
  {
    id: 1,
    nombre: "ir a favoritos",
    destino: "/favoritos",
    icono: "icon-[tabler--heart]",
  },
  {
    id: 2,
    nombre: "ir al inicio",
    destino: "/",
    icono: "icon-[tabler--home]",
  },
];

export default function CarritoVacio() {
  return (
    <div className="min-h-[250px] md:min-h-[300px] lg:min-h-[400px] rounded-md bg-secondary-black p-4 flex items-center justify-center flex-col gap-4 w-full">
      <div className="w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center rounded-full border border-main-white/10">
        <span className="icon-[tabler--shopping-cart-exclamation] h-6 w-6 lg:h-10 lg:w-10"></span>
      </div>
      <span className="first-letter:capitalize text-lg text-center md:text-2xl">
        parece que no tienes artículos en tu carrito
      </span>
      <div className="flex gap-2 w-full items-center flex-wrap justify-center mt-4">
        {listadoBotones.map((boton) => (
          <Link
            href={boton.destino}
            className="border text-[11px] uppercase border-main-white/10 rounded-md bg-main-black py-2 px-4 flex items-center gap-2 hover:border-primary/50 hover:text-primary transition-colors w-full max-w-[200px] justify-between"
            key={boton.id}
          >
            <span className="sm:text-xs lg:text-sm">{boton.nombre}</span>
            <span
              className={`${boton.icono} h-3 w-3 sm:h-4 lg:h-5 sm:w-4 lg:w-5`}
            ></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
