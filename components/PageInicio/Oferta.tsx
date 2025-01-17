import React from "react";

export default function Oferta() {
  return (
    <section className="flex px-4 md:px-10 lg:px-12 flex-col gap-4 pt-12 pb-4 items-center justify-center mb-20 bg-secondary text-center">
      <span className="capitalize italic text-lg font-playfair-display text-main-white md:text-xl lg:text-2xl">
        velvet premier party
      </span>
      <span className="uppercase text-main-white text-4xl max-w-[300px] md:max-w-full sm:text-3xl font-black md:text-5xl">
        -25% en toda la tienda!
      </span>
      <span className="first-letter:uppercase">
        con el código:{" "}
        <span className="inline-block py-1 px-3 border-2 rounded-sm border-secondary-black uppercase font-bold text-lg">
          party
        </span>
      </span>
      <span className="text-[10px] text-main-white font-medium mt-4">
        Se aplican terminos y condiciones. Solo por tiempo limitado
      </span>
    </section>
  );
}
