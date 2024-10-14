import React from "react";
import DireccionDeEntrega from "./DireccionDeEntrega";
import MetodoDeEnvio from "./MetodoDeEnvio";
import { Envio } from "@/types/localTypes";

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
  return (
    <section>
      <form className="grid gap-8 relative max-w-[400px] mx-auto md:grid-cols-[1.4fr,1fr] sm:max-w-full sm:gap-x-2 lg:gap-8 lg:grid-cols-[1fr,350px] xl:grid-cols-[1fr,450px]">
        <DireccionDeEntrega
          direccionCorrecta={direccionCorrecta}
          setDireccionCorrecta={setDireccionCorrecta}
        />
        <MetodoDeEnvio
          currentEnvio={currentEnvio}
          setCurrentEnvio={setCurrentEnvio}
        />
        {children}
      </form>
    </section>
  );
}
