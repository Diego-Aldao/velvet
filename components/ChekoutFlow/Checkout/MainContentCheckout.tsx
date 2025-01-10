import React from "react";
import DireccionDeEntrega from "./DireccionDeEntrega";
import MetodoDeEnvio from "./MetodoDeEnvio";
import { Envio } from "@/types/localTypes";
import useCheckoutFlow from "@/hooks/checkoutFlow/useCheckoutFlow";
import CheckoutSkeleton from "@/components/skeletons/CheckoutFlow/CheckoutSkeleton";
export type Inputs = {
  example: string;
  exampleRequired: string;
};

interface Props {
  currentEnvio: Envio | null;
  setCurrentEnvio: React.Dispatch<React.SetStateAction<Envio | null>>;
  direccionCorrecta: boolean;
  setDireccionCorrecta: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function MainContentCheckout({
  currentEnvio,
  setCurrentEnvio,
  direccionCorrecta,
  setDireccionCorrecta,
  children,
}: Props) {
  const { loading } = useCheckoutFlow();

  return (
    <>
      {loading && <CheckoutSkeleton />}
      {!loading && (
        <section className="grid gap-8 relative max-w-[400px] mx-auto md:grid-cols-[1.4fr,1fr] sm:max-w-full w-full sm:gap-x-2 lg:gap-8 lg:grid-cols-[1fr,350px] xl:grid-cols-[1fr,450px]">
          {!direccionCorrecta && (
            <DireccionDeEntrega setDireccionCorrecta={setDireccionCorrecta} />
          )}
          {direccionCorrecta && (
            <MetodoDeEnvio
              currentEnvio={currentEnvio}
              setCurrentEnvio={setCurrentEnvio}
              setDireccionCorrecta={setDireccionCorrecta}
            />
          )}
          {children}
        </section>
      )}
    </>
  );
}
