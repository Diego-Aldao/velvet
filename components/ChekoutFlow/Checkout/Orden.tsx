"use client";
import ContenedorImagen from "@/components/containers/ContenedorImagen";
import { useProductContext } from "@/context/ProductsContext";
import { Envio } from "@/types/localTypes";
import getMontoTotal from "@/utils/getMontoTotal";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  currentEnvio: Envio | null;
  children?: React.ReactNode;
  customStyles: string;
}

export default function Orden({ currentEnvio, customStyles, children }: Props) {
  const { carrito } = useProductContext();
  const subtotal = getMontoTotal(carrito);
  const [precioFinal, setPrecioFinal] = useState<string>(subtotal);

  useEffect(() => {
    if (!currentEnvio) return;

    let nuevoPrecioFinal: number | string =
      parseFloat(currentEnvio.precio.replace(",", ".")) +
      parseFloat(subtotal.replace(",", "."));
    nuevoPrecioFinal = nuevoPrecioFinal.toFixed(2).replace(".", ",");
    setPrecioFinal(nuevoPrecioFinal);
  }, [currentEnvio, subtotal]);

  return (
    <section className={`flex flex-col gap-2  ${customStyles}`}>
      <span className="first-letter:uppercase font-semibold text-lg">
        tu orden
      </span>
      <ul className="border-b border-main-white/10 pb-4 flex flex-col gap-4">
        {carrito.map((item) => (
          <li className="grid grid-cols-[1fr,4fr] gap-2" key={item.id}>
            <ContenedorImagen>
              <Image
                src={`https://${item.imagen}`}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </ContenedorImagen>
            <div className="info flex gap-1">
              <div className="left-info flex flex-col gap-2 w-[70%]">
                <span className="text-xs sm:text-sm md:text-xs line-clamp-2 font-medium">
                  {item.nombre}
                </span>
                <span className="text-xs text-main-white/80">{item.color}</span>
                <span className="text-xs">x1</span>
              </div>
              <span className="text-xs sm:text-sm md:text-xs font-nunito-sans w-fit ml-auto font-semibold">
                {item.precio.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-4 pt-4">
        <li className="flex justify-between text-sm">
          <span className="first-letter:uppercase text-main-white/50">
            subtotal
          </span>
          <span className="font-nunito-sans">{subtotal} €</span>
        </li>
        <li className="flex justify-between text-sm">
          <span className="first-letter:uppercase text-main-white/50">
            descuento
          </span>
          <span className="font-nunito-sans">- 0 €</span>
        </li>
        <li className="flex justify-between text-sm">
          <span className="first-letter:uppercase text-main-white/50">
            precio de envio
          </span>

          <span className="font-nunito-sans">
            {currentEnvio ? `${currentEnvio.precio} €` : "por definir"}
          </span>
        </li>
        <li className="flex justify-between py-2">
          <span className="flex flex-col">
            <span className="font-medium capitalize">precio final</span>
            {!currentEnvio && (
              <span className="text-[10px] first-letter:capitalize text-main-white/50">
                previo al envio*
              </span>
            )}
          </span>

          <span className="font-nunito-sans">{precioFinal} €</span>
        </li>
      </ul>
      {children}
    </section>
  );
}
