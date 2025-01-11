import React from "react";

interface Props {
  itemCount: number;
}

export default function CantidadDeProductos({ itemCount }: Props) {
  return (
    <div className="cantidad-productos flex gap-4 w-full items-center lg:col-span-2 lg:row-start-1">
      <span className="flex-1 h-[1px] bg-secondary"></span>
      <span className="w-fit inline-block text-xs capitalize md:text-sm">
        {itemCount} estilos encontrados
      </span>
      <span className="flex-1 h-[1px] bg-secondary"></span>
    </div>
  );
}
