"use client";
import React, { useState } from "react";
import MainContentCarrito from "./Carrito/MainContentCarrito";
import MainContentCheckout from "./Checkout/MainContentCheckout";
import { Envio } from "@/types/localTypes";
import Orden from "./Checkout/Orden";
import MainContentPago from "./Pago/MainContentPago";
import MainContentConfirmacion from "./Confirmacion/MainContentConfirmacion";
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
            direccionCorrecta={direccionCorrecta}
          >
            <button
              className={`w-full rounded-md py-2 ${
                direccionCorrecta && currentEnvio !== null
                  ? "bg-primary text-main-black"
                  : "bg-primary/10 text-secondary-black"
              }`}
              disabled={direccionCorrecta !== true && currentEnvio === null}
            >
              <span className="uppercase font-bold">continuar al pago</span>
            </button>
          </Orden>
        </MainContentCheckout>
      )}
      {pagePago && <MainContentPago />}
      {pageConfirmacion && <MainContentConfirmacion />}
    </>
  );
}
