"use client";
import useCheckoutFlow from "@/hooks/checkoutFlow/useCheckoutFlow";
import { Envio } from "@/types/localTypes";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  currentEnvio: Envio | null;
}

export default function Confirmacion({ currentEnvio }: Props) {
  const router = useRouter();
  const { endCheckout } = useCheckoutFlow();

  const handleClick = () => {
    localStorage.removeItem("direccion");
    localStorage.removeItem("currentEnvio");
    localStorage.removeItem("carrito");
    endCheckout();
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="check w-full flex bg-secondary-black p-4 rounded-md flex-col gap-2 items-center md:col-span-2 max-w-[800px] mx-auto">
        <div className="border-2 border-green-500 rounded-full w-16 h-16 flex items-center justify-center">
          <span className="icon-[tabler--check] h-10 w-10 text-green-500"></span>
        </div>
        <span className="first-letter:uppercase font-semibold text-xl font-nunito-sans md:text-2xl">
          gracias por tu orden!
        </span>
        <span className="text-xs first-letter:uppercase text-center text-white/80 md:text-sm">
          la confirmacion de la orden a sido enviada a tu correo
        </span>
        <div className="info-transaccion mt-8 flex flex-col gap-4 md:flex-row md:gap-x-12">
          <div className="flex flex-col gap-2  items-center">
            <span className="first-letter:uppercase text-sm md:text-base font-medium">
              fecha de transaccion
            </span>
            <span className="text-white/80 text-xs md:text-sm">
              martes 25 de noviembre de 2025, 14:55
            </span>
          </div>
          <div className="flex flex-col gap-2  items-center">
            <span className="first-letter:uppercase text-sm md:text-base font-medium">
              método de pago
            </span>
            <span className="text-white/80 text-xs md:text-sm">
              Mastercard terminada en 2044
            </span>
          </div>
          {currentEnvio && (
            <div className="flex flex-col gap-2  items-center">
              <span className="first-letter:uppercase text-sm md:text-base font-medium">
                tipo de envío
              </span>
              <span className="text-white/80 text-xs md:text-sm first-letter:uppercase">
                {currentEnvio.tipo} ({currentEnvio.demora})
              </span>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={handleClick}
        className="w-full py-1 flex items-center justify-center gap-4 bg-primary text-main-black rounded-md font-bold uppercase max-w-[500px] mx-auto"
      >
        <span>seguir comprando</span>
        <span className="icon-[tabler--arrow-narrow-right]"></span>
      </button>
    </div>
  );
}
