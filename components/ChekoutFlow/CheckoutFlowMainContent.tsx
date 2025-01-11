"use client";
import React, { useEffect, useState } from "react";
import MainContentCarrito from "./Carrito/MainContentCarrito";
import MainContentCheckout from "./Checkout/MainContentCheckout";
import { Envio } from "@/types/localTypes";
import Orden from "./Checkout/Orden";
import MainContentPago from "./Pago/MainContentPago";

interface Props {
  checkoutPage: "carrito" | "checkout" | "pago";
}

export default function CheckoutFlowMainContent({ checkoutPage }: Props) {
  const pageCarrito = checkoutPage === "carrito";
  const pageCheckout = checkoutPage === "checkout";
  const pagePago = checkoutPage === "pago";

  const [currentEnvio, setCurrentEnvio] = useState<Envio | null>(() => {
    const storedEnvio = localStorage.getItem("currentEnvio");
    return storedEnvio ? JSON.parse(storedEnvio) : null;
  });
  const [direccionCorrecta, setDireccionCorrecta] = useState<boolean>(false);

  useEffect(() => {
    if (currentEnvio == null) return;
    localStorage.setItem("currentEnvio", JSON.stringify(currentEnvio));
  }, [currentEnvio]);

  return (
    <>
      {pageCarrito && <MainContentCarrito />}
      {pageCheckout && (
        <MainContentCheckout
          currentEnvio={currentEnvio}
          setCurrentEnvio={setCurrentEnvio}
          direccionCorrecta={direccionCorrecta}
          setDireccionCorrecta={setDireccionCorrecta}
        >
          <Orden
            currentEnvio={currentEnvio}
            customStyles="bg-secondary-black px-3 py-4 border border-main-white/20 rounded-md md:row-start-1 md:col-start-2 md:mt-[14px] md:row-span-full md:sticky sm:top-0 !h-fit"
          />
        </MainContentCheckout>
      )}
      {pagePago && (
        <MainContentPago currentEnvio={currentEnvio}>
          <Orden
            currentEnvio={currentEnvio}
            customStyles="bg-secondary-black px-3 py-4 border border-main-white/20 rounded-md md:row-start-1 md:col-start-2 md:mt-[14px] md:row-span-full md:sticky sm:top-0 !h-fit"
          />
        </MainContentPago>
      )}
    </>
  );
}
