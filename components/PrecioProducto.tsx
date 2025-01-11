import { Price } from "@/types/fetchTypes";
import getPorcentajeDescuento from "@/utils/getPorcentajeDescuento";
import React from "react";

interface Props {
  precio: Price;
  isSimple?: boolean;
  customStyles?: string;
}

export function PrecioRebajado({ precio, isSimple, customStyles }: Props) {
  const descuento = getPorcentajeDescuento(
    precio.previous.value,
    precio.current.value
  );
  return (
    <div className="flex flex-col gap-1">
      {isSimple ? (
        <span
          className={`font-nunito-sans font-bold text-lg text-main-red ${customStyles}`}
        >
          {precio.current.text}
        </span>
      ) : (
        <>
          <span className="font-nunito-sans font-bold text-lg capitalize text-main-red">
            ahora {precio.current.text}
          </span>
          <div className="precio-anterior flex gap-2 items-center">
            <span className="font-nunito-sans capitalize font-light text-xs">
              antes {precio.previous.text}
            </span>
            <span className="font-nunito-sans text-sm font-bold text-main-red">
              (-{descuento}%)
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function PrecioProducto({
  precio,
  isSimple,
  customStyles,
}: Props) {
  if (precio.isMarkedDown) {
    return (
      <PrecioRebajado
        precio={precio}
        isSimple={isSimple}
        customStyles={customStyles}
      />
    );
  } else {
    return (
      <span className={`font-nunito-sans font-bold text-lg ${customStyles}`}>
        {precio.current.text}
      </span>
    );
  }
}
