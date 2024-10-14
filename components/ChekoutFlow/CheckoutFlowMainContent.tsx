"use client";
import React, { useEffect, useState } from "react";
import MainContentCarrito from "./Carrito/MainContentCarrito";
import MainContentCheckout from "./Checkout/MainContentCheckout";
import { Envio } from "@/types/localTypes";
import Orden from "./Checkout/Orden";
import MainContentPago from "./Pago/MainContentPago";
import MainContentConfirmacion from "./Confirmacion/MainContentConfirmacion";
import Link from "next/link";

interface Props {
  checkoutPage: "carrito" | "checkout" | "pago" | "confirmacion";
}

export default function CheckoutFlowMainContent({ checkoutPage }: Props) {
  const pageCarrito = checkoutPage === "carrito";
  const pageCheckout = checkoutPage === "checkout";
  const pagePago = checkoutPage === "pago";
  const pageConfirmacion = checkoutPage === "confirmacion";

  const [currentEnvio, setCurrentEnvio] = useState<Envio | null>(null);
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
            customStyles="bg-secondary-black px-3 py-4 border border-main-white/20 rounded-md md:row-start-1 md:col-start-2 md:mt-[14px] md:row-span-full md:sticky sm:top-0"
          >
            <button
              className={`w-full rounded-md py-2 ${
                direccionCorrecta && currentEnvio !== null
                  ? "bg-primary text-main-black"
                  : "bg-primary/10 text-secondary-black cursor-not-allowed"
              }`}
              disabled={direccionCorrecta === false || currentEnvio === null}
            >
              <span className="uppercase font-bold">continuar al pago</span>
            </button>
          </Orden>
        </MainContentCheckout>
      )}
      {pagePago && <MainContentPago />}
      {pageConfirmacion && (
        <MainContentConfirmacion>
          <Orden
            currentEnvio={currentEnvio}
            pageConfirmacion={pageConfirmacion}
            customStyles=""
          >
            <Link
              href="/"
              className="w-full rounded-md py-2 bg-primary flex items-center justify-center"
            >
              <span className="uppercase text-main-black font-bold">
                seguir comprando
              </span>
            </Link>
          </Orden>
        </MainContentConfirmacion>
      )}
    </>
  );
}
