"use client";
import React, { useState } from "react";
import MetodoDePago from "../Checkout/MetodoDePago";
import Confirmacion from "./Confirmacion";
import { Envio } from "@/types/localTypes";
import useCheckoutFlow from "@/hooks/checkoutFlow/useCheckoutFlow";
import PagoSkeleton from "@/components/skeletons/CheckoutFlow/PagoSkeleton";

interface Props {
  children: React.ReactNode;
  currentEnvio: Envio | null;
}

export default function MainContentPago({ children, currentEnvio }: Props) {
  const [datosCorrectos, setDatosCorrectos] = useState<boolean>(false);
  const { loading } = useCheckoutFlow();

  return (
    <>
      {loading && <PagoSkeleton />}
      {!loading && (
        <section className="grid gap-8 max-w-[450px] mx-auto md:max-w-[550px] w-full lg:max-w-full lg:grid-cols-[1fr,350px] xl:grid-cols-[1fr,450px]">
          {!datosCorrectos && (
            <>
              <MetodoDePago setDatosCorrectos={setDatosCorrectos} />
              {children}
            </>
          )}
          {datosCorrectos && <Confirmacion currentEnvio={currentEnvio} />}
        </section>
      )}
    </>
  );
}
