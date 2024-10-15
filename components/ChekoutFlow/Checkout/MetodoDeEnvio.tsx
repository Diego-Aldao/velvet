import React from "react";
import CustomFieldset from "./CustomFieldset";
import { Envio } from "@/types/localTypes";
import { ENVIOS } from "@/constants";

interface Props {
  currentEnvio: Envio | null;
  setCurrentEnvio: React.Dispatch<React.SetStateAction<Envio | null>>;
}

export default function MetodoDeEnvio({
  currentEnvio,
  setCurrentEnvio,
}: Props) {
  const handleClick = (envio: Envio) => {
    setCurrentEnvio(envio);
  };
  return (
    <CustomFieldset
      fieldName="método de envío"
      fieldsetCompleted={currentEnvio !== null}
      customStyles="col-start-1"
    >
      <ul className="px-2 flex flex-col gap-2">
        {ENVIOS.map((envio) => (
          <li
            className={`flex gap-2 transition-colors p-2 rounded-md ${
              currentEnvio?.id === envio.id ? "bg-primary/20" : "bg-transparent"
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
    </CustomFieldset>
  );
}
