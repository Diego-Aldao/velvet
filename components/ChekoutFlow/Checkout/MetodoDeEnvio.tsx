import React, { useState } from "react";
import CustomFieldset from "./CustomFieldset";
import { Envio } from "@/types/localTypes";
import { ENVIOS } from "@/constants";
import { useRouter } from "next/navigation";

interface Props {
  currentEnvio: Envio | null;
  setCurrentEnvio: React.Dispatch<React.SetStateAction<Envio | null>>;
  setDireccionCorrecta: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MetodoDeEnvio({
  currentEnvio,
  setCurrentEnvio,
  setDireccionCorrecta,
}: Props) {
  const [submitedEnvio, setSubmitedEnvio] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (envio: Envio) => {
    setCurrentEnvio(envio);
  };

  const handleSubmit = () => {
    setSubmitedEnvio(true);
    if (currentEnvio) {
      router.push("/cf/pago");
    }
  };

  return (
    <div className="md:col-start-1 w-full flex flex-col gap-4 col-span-1">
      <CustomFieldset
        fieldsetError={!currentEnvio && submitedEnvio}
        fieldName="método de envío"
        fieldsetCompleted={currentEnvio !== null}
      >
        <ul className="px-2 flex flex-col gap-2">
          {ENVIOS.map((envio) => (
            <li
              className={`flex gap-2 transition-colors p-2 rounded-md ${
                currentEnvio?.id === envio.id
                  ? "bg-primary/20"
                  : "bg-transparent"
              }`}
              key={envio.id}
              onClick={() => {
                handleClick(envio);
              }}
            >
              <div
                className={`check bg-main-white rounded-full h-3 w-3 mt-1 flex items-center justify-center relative after:transition-all after:absolute after:bg-main-black  after:rounded-full ${
                  currentEnvio?.id === envio.id
                    ? "after:opacity-100 after:visible after:h-2 after:w-2"
                    : "after:opacity-0 after:invisible after:h-0 after:w-0"
                }`}
              ></div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium first-letter:uppercase">
                  {envio.tipo}
                </span>
                <span className="text-xs font-nunito-sans">{envio.demora}</span>
              </div>
              <span className="text-sm font-medium font-nunito-sans ml-auto">
                {envio.precio} €
              </span>
            </li>
          ))}
        </ul>
        <span
          className={`first-letter:capitalize text-main-red text-xs px-2 ${
            submitedEnvio && !currentEnvio ? "block" : "hidden"
          }`}
        >
          Debes seleccionar un tipo de envío
        </span>
      </CustomFieldset>
      <div className="botones flex flex-col lg:flex-row gap-2">
        <button
          onClick={() => {
            setDireccionCorrecta(false);
          }}
          className="w-full flex items-center gap-4 justify-center py-1 bg-secondary-black text-main-white rounded-md font-bold text-sm xl:text-base uppercase"
        >
          <span className="icon-[tabler--arrow-narrow-left]"></span>

          <span>modificar dirección</span>
        </button>
        <button
          onClick={handleSubmit}
          className="w-full flex items-center gap-4 justify-center py-1 bg-primary text-main-black rounded-md font-bold text-sm xl:text-base uppercase"
        >
          <span>elegir metodo de pago</span>
          <span className="icon-[tabler--arrow-narrow-right]"></span>
        </button>
      </div>
    </div>
  );
}
