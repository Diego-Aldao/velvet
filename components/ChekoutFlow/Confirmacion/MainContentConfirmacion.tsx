"use client";
import { Envio } from "@/types/localTypes";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function MainContentConfirmacion({ children }: Props) {
  const [tipoDeEnvio, setTipoDeEnvio] = useState<Envio | null>(null);

  useEffect(() => {
    const envioLS: Envio = JSON.parse(
      localStorage.getItem("currentEnvio") || ""
    );
    setTipoDeEnvio(envioLS);
  }, []);

  return (
    <div className="flex flex-col gap-8 rounded-md max-w-[450px] lg:max-w-[550px]  mx-auto">
      <div className="check w-full flex bg-secondary-black p-4 rounded-md flex-col gap-2 items-center mb-4">
        <div className="border-2 border-green-500 rounded-full w-16 h-16 flex items-center justify-center">
          <span className="icon-[tabler--check] h-10 w-10 text-green-500"></span>
        </div>
        <span className="first-letter:uppercase font-semibold text-xl font-nunito-sans">
          gracias por tu orden!
        </span>
        <span className="text-xs first-letter:uppercase text-center text-white/80">
          la confirmacion de la orden a sido enviada a tu correo
        </span>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="first-letter:uppercase font-medium">
          fecha de transaccion
        </span>
        <span className="text-white/80 text-xs">
          martes 25 de noviembre de 2025, 14:55
        </span>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="first-letter:uppercase font-medium">
          método de pago
        </span>
        <span className="text-white/80 text-xs">
          Mastercard terminada en 2044
        </span>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="first-letter:uppercase font-medium">
          tipo de envío
        </span>
        {tipoDeEnvio && (
          <span className="text-white/80 text-xs first-letter:uppercase">
            {tipoDeEnvio.tipo} ({tipoDeEnvio.demora})
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
