import React from "react";

export default function MainContentFooter() {
  return (
    <div className="contenido flex flex-col gap-2 items-center w-full">
      <h3 className="uppercase text-2xl font-bold text-center w-full md:text-3xl lg:text-4xl xl:text-5xl">
        explora nuestro catalogo de moda
      </h3>
      <span className="text-center first-letter:uppercase max-w-[400px] md:max-w-[550px] lg:max-w-[750px] text-sm">
        navega por nuestro catalogo de moda para encontrar una amplia variedad
        de opciones.
      </span>
      <button className="rounded-full py-2 px-4 text-main-white mt-4 border border-main-white flex items-center gap-2">
        <span className="first-letter:uppercase">mira nuestro instagram</span>
        <span className="icon-[tabler--arrow-narrow-right]"></span>
      </button>
    </div>
  );
}
