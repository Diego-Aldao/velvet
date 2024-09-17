import React from "react";

interface Props {
  titulo: string;
  children: React.ReactElement;
  icono: string;
}

export default function SinProductos({ titulo, children, icono }: Props) {
  return (
    <div className="min-h-[250px] md:min-h-[300px] lg:min-h-[400px] rounded-md bg-secondary-black p-4 flex items-center justify-center flex-col gap-4 w-full">
      <div className="w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center rounded-full border border-main-white/10">
        <span className={`${icono} h-6 w-6 lg:h-10 lg:w-10`}></span>
      </div>
      <span className="first-letter:capitalize text-lg text-center md:text-2xl">
        {titulo}
      </span>
      {children}
    </div>
  );
}
