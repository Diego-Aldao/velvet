import React from "react";
import { LocalSubInfo } from "@/types/localTypes";
import translateNombreSubInfo from "@/utils/translateNombreSubInfo";

interface Props {
  nombreItem: string;
  contenido: string;
  handleClick: (nombreItem: string) => void;
  currentSubInfo: LocalSubInfo;
}

export default function SubInfoItem({
  nombreItem,
  currentSubInfo,
  handleClick,
}: Props) {
  const nombreTraducido = translateNombreSubInfo(nombreItem);
  return (
    <div
      onClick={() => handleClick(nombreItem)}
      className={`rounded-full p-3 py-1 relative z-10 w-fit flex items-center justify-between transition-colors cursor-pointer hover:bg-primary hover:text-main-black ${
        currentSubInfo.nombre === nombreItem
          ? "bg-primary text-main-black"
          : "bg-secondary-black text-main-white"
      }`}
    >
      <span className="capitalize font-semibold text-xs">
        {nombreTraducido}
      </span>
    </div>
  );
}
