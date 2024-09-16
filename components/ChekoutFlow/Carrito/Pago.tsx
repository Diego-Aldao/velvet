"use client";
import { useProductContext } from "@/context/ProductsContext";
import getMontoTotal from "@/utils/getMontoTotal";
import Link from "next/link";
import React from "react";

export default function Pago() {
  const { carrito } = useProductContext();
  const montoTotal = getMontoTotal(carrito);

  return (
    <div className="pago p-4 bg-secondary-black flex gap-4 flex-col h-fit border border-main-white/10 rounded-md sticky bottom-4 sm:top-0 sm:bottom-auto sm:self-start self-end">
      <div className="sub flex justify-between items-center">
        <span className="text-main-white/50 capitalize text-sm">subtotal</span>
        <span className="flex gap-1 items-center">
          <span className="font-nunito-sans text-sm xl:text-base">
            {montoTotal}
          </span>
          <span className="icon-[tabler--currency-euro] h-[14px] w-[14px] xl:h-4 xl:w-4"></span>
        </span>
      </div>
      <div className="desc flex justify-between items-center">
        <span className="text-main-white/50 capitalize text-sm">descuento</span>
        <span className="flex items-center gap-1">
          <span className="font-nunito-sans text-sm xl:text-base">- 0,00</span>
          <span className="icon-[tabler--currency-euro] h-[14px] w-[14px] xl:h-4 xl:w-4"></span>
        </span>
      </div>
      <div className="total flex justify-between items-center py-2">
        <span className="capitalize font-medium">precio final</span>
        <span className="flex gap-1 items-center">
          <span className="text-lg sm:text-xl xl:text-2xl font-nunito-sans font-bold">
            {montoTotal}
          </span>
          <span className="icon-[tabler--currency-euro] w-[18px] h-[18px] sm:h-5 sm:w-5"></span>
        </span>
      </div>
      <Link
        href="/checkout"
        className="bg-primary text-main-black text-center uppercase font-bold py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        ir al checkout
      </Link>
    </div>
  );
}
